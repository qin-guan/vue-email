# `@qingu/vue-email`

A tiny wrapper for crafting emails. Originally created by [react-email](https://github.com/resendlabs/react-email), but now for Vue. 

> Note: you should check out [vue-email](https://github.com/Dave136/vue-email), which is more maintained than this package. I mostly use it for my own projects, but I'm happy to accept PRs if you want to contribute.

## Differences

There were a few things I explicitly did not want to support compared to `react-email`.

1. No Tailwind styles
   1. Implementing it required using hacky-ish code, which I wasn't a fan of.
   2. The tradeoff between inline styles did not feel worthy.

2. Markdown parser uses `remark`
   1. Compared to `vue-email` and `react-email`, this uses `remark` to parse Markdown and converts it to VNodes.
   2. I think it provides more flexibility, but I haven't really figured it out either
   3. Use `VEMarkdown` at your own risk!
  