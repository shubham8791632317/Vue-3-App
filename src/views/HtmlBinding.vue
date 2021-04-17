<template>
  <div>
      <h1>Welcome to Html Binding Home Page</h1>
      <hr>
      <br><br>
      <div v-html="name"></div> <!-- This is called html binding -->
      <p v-html="city"></p>     <!-- This is called html binding -->
  </div>
</template>

<script>
export default {
    name: "HtmlBinding",
    data(){
      return{
        name: "<b>Shubham Singh is a good boy.</b>",
        city: "<strong><em>Dehradun is a beautiful city</em></strong>"
      }
    }
}
</script>

<style scoped>
div{
  text-align: center;
}
</style>