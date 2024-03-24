<template>
    <h1>Component 2: ButtonEvent</h1>
    <button v-on:click="increaseCount()">Button 1</button>
    <button v-on:dblclick="getData('Button 2 double clicked')">Button 2</button>
    <h3>Count: {{ count }}</h3>

    <h2>Two way binding</h2>
    <input type="text" v-model="num" />
    <h3>{{ num }}</h3>

    <input type="text" placeholder="Enter email" v-model="email" /><br />
    <input type="text" placeholder="Enter password" v-model="password" /><br />
    <button v-on:click="printInConsole">Show in Console</button>

    <h2>Technologies</h2>
    <label for="java">Java</label>
    <input type="checkbox" id="java" value="java" v-model="technologies" />
    <label for="php">PHP</label>
    <input type="checkbox" id="php" value="php" v-model="technologies" />
    <label for="node">Node</label>
    <input type="checkbox" id="node" value="node" v-model="technologies" />

    <h3>{{ technologies }}</h3>

    <h2>Who am I? </h2>

    <label for="student" >Student</label>
    <input type="radio" name="who" value="student" id="student" v-model="who"/>
    <label for="student" >Developer</label>
    <input type="radio" name="who" value="developer" id="developer" v-model="who"/>

    <h3>Who am I? {{who }}</h3>

    <h3 v-if="show">This will show if show attribute is true</h3>
    <button v-on:click="show= !show">Toggle</button>
</template>
<script>
export default {
    name: 'ButtonEvent',
    data() {
        return {
            count: 1, num: '', email: null, password: null, technologies: [], who: null, show: true,
        };
    },
    methods: {
        getData(text) {
            alert(text);
        },
        logInConsole(data) {
            console.log(data);
        },
        increaseCount() {
            this.count = this.count + 1;
        },
        printInConsole() {
            console.log("Email:" + this.email + "Password:" + this.password);
        }
    }
}

</script>

<style>
    h1{
        background-color: green;
    }
</style>