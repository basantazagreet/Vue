<template>
  <div class="hello">
    <h1 ref="countH1">{{ msg }} {{ count }}</h1>
    <button v-on:click="count++">Increase count</button>
    <p>Copyright Basanta Sapkota</p>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      count:0
    };
  },
  beforeCreate(){
    console.log('Before create');
  },
  created(){
    console.log('Created');
  },
  beforeMount(){
    console.log("before mount"+this.$el)
  },
  mounted(){
    console.log("Mounted"+this.$el)
  },
  beforeUpdate(){
    console.log("Before Update"+this.$refs.countH1.textContent);
  },
  updated(){
    console.log('Updated'+this.$refs.countH1.textContent);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
