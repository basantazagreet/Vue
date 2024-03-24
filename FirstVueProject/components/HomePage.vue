<template>
    <h1>Component 1: HomePage</h1>
    <h2>Name: {{ name }}</h2>
    <h2>Mobile: {{ Mobile }}</h2>
    <h2>Address: {{ getAddress("Gaindakot") }}</h2>
    <h2>Address: {{ getCity('Nawalpur') }}</h2>
    <h2>Address: {{ getFullName() }}</h2>
</template>
<script>
export default {
    name: 'HomePage',
    data() {
        return {
            name: 'Basanta',
            Mobile: '9869047383',
            getAddress: function (a) {
                return a;
            }
        }
    },
    methods: {
        getCity(city) {
            return city;
        },
        getFullName() {
            return {
                firstname: 'Basanta',
                lastname: 'Sapkota'
            }
        }
    }
}
</script>

<style scoped>
h2 {
    color: green;
}
</style>