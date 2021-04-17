<template>
  <div>
      <h1>Welcome to Style Binding Home Page</h1>
      <hr>
      <br><br>
      <!-- This is called style binding -->
      <h2 v-bind:style="{               
        color: highlightColor,
        fontSize: headerSize+'px'
        }">Inline Style</h2>     
      <br>
      <!-- Multiple Style inline property using Object-->
      <h2 v-bind:style="headerStyleObject">Style Object</h2>
      <hr>
      <!-- Multiple Style using Array -->
      <div v-bind:style="[baseStyleObject, successStyleObject]">
        Success Style
      </div>

  </div>
</template>

<script>
export default {
    name: "StyleBinding",
    data(){
      return{
        highlightColor: 'orange',
        headerSize: 50,
        headerStyleObject: {
          color: 'red',
          fontSize: '50px',
          padding: '20px',
          border: '1px solid black',
          display: 'inline-block'
        },
        baseStyleObject: {
          fontSize: '50px',
          padding: '10px'
        },
        successStyleObject: {
          color: 'green',
          backgroundColor: 'lightgreen',
          border: '1px solid green'
        }
      }
    }
}
</script>

<style scoped>
div{
  text-align: center;
}
</style>