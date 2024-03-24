<template>
    <h1>Component chapter 6: Dynamic Component</h1>
    <button v-on:click="tab='JavaDemo'">Java</button>
    <button v-on:click="tab='phpDemo'">PHP</button>
    <button v-on:click="tab='NodeDemo'">Node</button>

    <component :is="tab"/>

    <JavaDemo v-if="show"/>
    <button v-on:click="show=!show">Toggle Java</button>

</template>
<script>
import phpDemo from './php.vue'
import NodeDemo from './Node.vue'
import JavaDemo from './Java.vue'


export default {
    name:"DynamicComp",
    components:{
        phpDemo,
        NodeDemo,
        JavaDemo
    },
    data(){
        
        return {
            tab: 'JavaDemo',
            show: true,

        };
    }
}
</script>