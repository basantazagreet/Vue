<template>
    <h1>Component 5: Form Handling</h1>

    <input type="text" ref="myInput">
    <button v-on:click="InputHandler()">Handle Input using ref</button><br/><br/>
    
    <label for="email">Email</label>
    <input type="text" name="email" placeholder="Enter Email" v-model.lazy="form.email"><br/><br/>
    <label for="password">Password</label>
    <input type="text" name="password" placeholder="Enter Password" v-model="form.password">


    <select v-model="form.country">
        <option value="Nepal">Nepal</option>
        <option value="Nepal">India</option>
        <option value="Nepal">Bangladesh</option>
    </select> <br><br>

    <label for="PHP">PHP</label>
    <input type="checkbox" v-model="form.technologies" id="PHP" value="PHP">
    
    <label for="Java">Java</label>
    <input type="checkbox" v-model="form.technologies" id="Java" value="Java">

    <label for="Node">Node</label>
    <input type="checkbox" v-model="form.technologies" id="Node" value="Node">
    
    <label for="male">Male</label>
    <input type="radio" v-model="form.gender" id="male" value="male">

    <label for="female">Node</label>
    <input type="radio" v-model="form.gender" id="female" value="female">

    <button v-on:click="formHandler()">Handle Input using ref</button><br/><br/>


    <ul>
        <li v-for="item in error" :key="item">{{ item }} error</li>

    </ul>

    <input type="text" v-model.lazy="myText">

    <h4>{{ myText }}</h4>
</template>
<script>
export default {
    name: "FormDemo",
    data(){
        return {
            form: {
                email: '',
                password: '',
                country:'',
                technologies: [],
                gender:'',

            },
            error:[],
            myText:"",
        };
    },
    methods:{
        InputHandler(){
            console.log(this.$refs.myInput.value);
            this.$refs.myInput.focus();
            this.$refs.myInput.style.backgroundColor = "green";
        },
        formHandler(){
            this.error=[];
            for(const item in this.form){
                if (this.form[item].length==0 || this.form[item]==""){
                    this.error.push(item)
                }
            }
            console.log(this.error);
        }
    }
}
</script>