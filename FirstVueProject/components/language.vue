<template>
   Language:  {{languageName}}

</template>
<script>
import { useRoute } from 'vue-router';

export default {
    name: 'LanguageDemo',
    data(){
        return {languageName: ""}
    },
    mounted(){
        const route = useRoute();
        console.log (route.params.name);
        this.languageName = route.params.name;
    }
}



</script>