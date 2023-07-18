<template>
  <table
    v-bind="$attrs"
    align="center"
    width="100%"
    data-id="__vue-email-container"
    role="presentation"
    cellSpacing="0"
    cellPadding="0"
    border="{0}"
    style="maxWidth: 37.5em;"
    :style="[$attrs?.style]"
  >
    <tbody>
      <tr style="width: 100%;">
        <td>
          <slot />
        </td>
      </tr>
    </tbody>
  </table>
</template>
