<template>
  <div>
      <h1>Welcome to AttributeBinding Binding Home Page</h1>
      <hr>
      <br><br>
      <h2 v-bind:id="headingId" v-bind:class="headingClass">Heading</h2> <!-- This is called attribute binding -->
      <br><br>
      <button v-bind:disabled="isDisabled">Click Me</button>             <!-- This is called attribute binding -->
  </div>
</template>

<script>
export default {
    name: "AttributeBinding",
    data(){
      return{
       headingId: 'heading',
       headingClass: 'demo',
       isDisabled: true
      }
    }
}
</script>

<style scoped>
div{
  text-align: center;
}
button{
    padding: 15px;
    width: 200px;
}
</style>