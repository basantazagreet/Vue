<template>
    <h1>Component 4: Component Reuse (student component)</h1>
    <ul>
        <li v-for="item in students" :key="item.name">
            <StudentDemo :data="item" :getData="getData" />
        </li>
    </ul>

    <div v-html="tag1"></div>

    <h3>Class binding example</h3>
    <div :class="{ greendiv: applyCSS }">This is using :class="{cssclass:condition}" </div>
    <button v-on:click="applyCSS = !applyCSS">Toggle css class</button>


    <div :class="applyStyle">This is using :class="computed_function" </div>

    <h3>Slot Example (react ma props.children gare jastai)</h3>
    <SlotDemo><a href="/facebook">Goto Facebook</a></SlotDemo>
    <SlotDemo>
        <h4>Hello World</h4>
    </SlotDemo>

    <SlotDemo>
        <template v-slot:header>
        <h4>Hello World header</h4>
        </template>
    
        <template v-slot:content>
        <h4>Hello World content</h4>
        </template>
    
        <template v-slot:footer>
        <h4>Hello World footer</h4>
        </template>
    </SlotDemo>
</template>
<script>

import StudentDemo from "./StudentDemo.vue"
import SlotDemo from './SlotDemo.vue'

export default {

    name: "CompReuse",
    data() {
        return {
            students: [
                { name: "Basanta Sapkota", address: "Vijayachowk" },
                { name: "Hemanta Sapkota", address: "Vijayachowk" },
                { name: "Diwas Kandel", address: "Vijayachowk" }
            ],
            tag1: "<h3>HTML Binding example using v-html",
            applyCSS: true,
        };
    },
    components: {
        StudentDemo,
        SlotDemo
    },
    methods: {
        getData(name) {
            alert(name);
        }
    },
    computed: {
        applyStyle() {
            return {
                err: false,
                bluediv: true
            }
        }
    }
}
</script>
<style>
.greendiv {
    background-color: green;
    width: 300px;
    margin: 0 auto;
    padding: 15px 20px;
}

.err {
    background-color: red;
    width: 300px;
    margin: 0 auto;
    padding: 15px 20px;
}

.bluediv {
    background-color: blue;
    width: 300px;
    margin: 0 auto;
    padding: 15px 20px;
}</style>