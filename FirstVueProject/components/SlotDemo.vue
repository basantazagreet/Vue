<template>
    <div>
        <slot></slot>
        <slot name="header"></slot>
        <slot name="content"></slot>
        <slot name="footer"></slot>
    </div>
</template>
<script>
export default {
    name: 'SlotDemo'
}
</script>