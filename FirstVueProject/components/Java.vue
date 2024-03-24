<template>
    <h2>Java</h2>
    <h2 ref="myH2">Example of unmounted and beforeUnmount Functions</h2>
</template>
<script>
export default {
    name:"JavaDemo",
    beforeUnmount(){
        console.log('beforeUnmount'+this.$refs.myH2);
    },
    unmounted(){

        console.log('beforeUnmount'+this.$refs.myH2);
    },
}
</script>