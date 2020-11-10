<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>{{numb}}</h1>
    <button @click="addNumb">click</button>
    <h1>{{$store.state.user}}</h1>
    <button @click="getUsers">cek</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data:()=>{
    return{
    
    }
  },
  methods:{
    addNumb(){
      this.numb++
    },
    getUsers(){
      this.$store.dispatch('getUser')
    }

  }
}
</script>
