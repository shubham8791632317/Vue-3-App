<template>
  <div>
      <h1>Welcome to Style Binding Home Page</h1>
      <hr>
      <br><br>
      <div v-html="name"></div> <!-- This is called html binding -->
      <p v-html="city"></p>     <!-- This is called html binding -->
  </div>
</template>

<script>
export default {
    name: "StyleBinding",
    data(){
      return{
        
      }
    }
}
</script>

<style>
div{
  text-align: center;
}
</style>