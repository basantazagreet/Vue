<template>
    <h1> Chapter 7: API Call</h1>
    <ul v-for="item in list" :key="item.id" class="axios-list">
        <li>{{ item.id }}</li>
        <li>{{ item.email }}</li>
        <li>{{ item.first_name }}</li>
        <li>{{ item.last_name }}</li>
        <li><img :src="item.avatar"></li>
    </ul>

    <input type="text" v-model="email"><br /><br />
    <input type="text" v-model="password">

    <button v-on:click="sendPostAPI">Send data to API</button>
</template>
<script>
import axios from "axios"

export default {
    name: "APICall",
    data() {
        return {
            list: " ",
            email: '',
            password: ''
        };
    },
    async mounted() {
        let result = await axios.get('https://reqres.in/api/users?page=2');
        this.list = result.data.data;
        console.log(this.list)
    },
    methods: {
        async sendPostAPI() {
            let res = await axios.post('url', {
                email: this.email,
                password: this.password,
            })
            console.log(res)
        }

    }
}

</script>
<style>
.axios-list {
    display: flex;
    gap: 30px;
    align-items: center;
    margin: 10px auto;
    background-color: #eee;
}

.axios-list li {
    display: inline-block;
    border: 1px solid #333;
    padding: 15px;
}
</style>