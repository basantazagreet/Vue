<template>
<div class="students">
    <h3>{{ data.name }}</h3>
    <h3>{{ data.address }}</h3>
    <button v-on:click="getData(data.name)">click me </button>
</div>


</template>
<script>
export default {
    name:"StudentDemo",
    props:{
        data:Object,
        getData:Function
    }
}
</script>
<style>
.students{
    background-color: #f2f2f2;
    padding: 15px 25px;
    margin: 30px auto;
}

li{
    list-style: none;
}
</style>