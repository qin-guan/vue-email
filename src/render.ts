import type { App, VNode } from 'vue'

import { convert } from 'html-to-text'
import { renderToString } from 'vue/server-renderer'

import { format } from 'prettier'

export interface Options {
  pretty?: boolean
  plainText?: boolean
}

const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'

export async function render(component: App | VNode, options?: Options) {
  if (options?.plainText)
    return await renderToPlainText(component)

  const markup = await renderToString(component)
  const document = `${doctype}${markup}`

  if (options?.pretty)
    return await format(document, { parser: 'html' })

  return document
}

async function renderToPlainText(component: App | VNode) {
  return convert(await renderToString(component), {
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: '#__vue-email-preview', format: 'skip' },
    ],
  })
}
