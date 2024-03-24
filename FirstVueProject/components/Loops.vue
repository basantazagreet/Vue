<template>
    <h1>Component 3: Loops</h1>
    <h3>For Loop in Vue</h3>

    <ul>
        <li v-for="item in Languages" :key="item">{{item}}</li>
    </ul>

    <ul>
        <li v-for="item in users" :key="item.name">Name: {{ item.name }} and Address: {{ item.address }}</li>
    </ul>


    <ChildDemo name="Basanta" sendAttrs="Hello World" :users="users" :runParentFunction="runParentFunction" :sendDataToParent="sendDataToParent"/>
</template>
<script>
import ChildDemo from './ChildDemo.vue'


export default {
    name: 'LoopsDemo',

    methods:{
        runParentFunction(){
            console.log('Parent function called');
        },
        sendDataToParent(myName){
            alert(myName);
            this.myText=myName;
        }
    },

    data(){
        return {
            Languages: ['php','java','python','Javascript'],
            users: [
                {name: 'Basanta', address: 'Gaindakot'},
                {name: 'Hemanta', address: 'Gaindakot'},
                {name: 'Diwas', address: 'Gaindakot'}
            ],
            myText:'',

        };
    },

    components: {
        ChildDemo
    }
}



</script>