<template>
  <div>
      <h1>Welcome to Text Binding Home Page</h1>
      <hr>
      <br><br>
      <h2>Welcome {{name}}</h2>
      <h2 v-text="city"></h2> <!-- This is called text binding -->
  </div>
</template>

<script>
export default {
    name: "TextBinding",
    data(){
      return{
        name: "Shubham Singh",
        city: 'Dehradun'
      }
    },
}
</script>
<style scoped>
div{
  text-align: center;
}
</style>

<style>

</style>