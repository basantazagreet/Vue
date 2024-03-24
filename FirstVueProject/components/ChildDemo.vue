<template>
    <div>
        <h3>Name from parent: {{ name }}</h3>
        <ul v-bind="$attrs">
            <li v-for="item in users" :key="item.name">{{ item.name }} and {{ item.address }}</li>
        </ul>
        <button v-on:click="runParentFunction()">Run Parent(Loops) Function </button>
        <button v-on:click="sendDataToParent(myName)">Send data to parent </button>

        <h2>Example of computed property</h2>
        <h3>{{ getResult }}</h3>
        <h2>Example of Watchers</h2>
        <h3>Count: {{ count }}</h3>
        <button v-on:click="count++">Increase count</button>
        <button v-on:click="count--">Decrease count</button>


    </div>
</template>


<script>

export default {
    name: 'ChildDemo',
    inheritAttrs: false,

    //Parent component is Loops
    props: {
        users: Array,
        name: String,
        runParentFunction: Function,
        sendDataToParent: Function,
    },
    data() {
        return {
            myName: 'Basanta',
            a: 22,
            b: 10,
            c: 5,
            count: 0,
        };
    },
    computed: {
        getResult() {
            return this.a + this.b - this.c;
        }
    },
    watch: {
        count(val, prev) {
            if (val >= 5 && prev < val) {
                alert('Count limit reached');
            }
        }
    }
}

</script>