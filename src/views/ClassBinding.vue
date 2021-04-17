<template>
  <div>
      <h1>Welcome to Class Binding Home Page</h1>
      <hr>
      <br><br>
      <h2 class="underline">Underlined text</h2>              <!-- This is called Class binding -->
      <br>
      <h2 v-bind:class="status">Status</h2>                   <!-- This is called Dynamic Class binding -->
      <br>
      <h2 class="underline" v-bind:class="status">Multiple Classes</h2>
      <br>
      <h2 v-bind:class="isPromoted && 'promoted'">Promoted Movie</h2>
      <br>
      <h2 v-bind:class="isSoldout ? 'sold-out' : 'new'">Sold out Movie</h2>     <!--Apply class based on boolean condition -->
      <br>
      <h2 v-bind:class="['new','promoted']">Newly Promoted Movie</h2>           <!-- Apply more than one class in an element using an Array-->
      <br>
      <h2 v-bind:class="[isPromoted && 'promoted', isSoldout ? 'sold-out' : 'new']">Array Conditional Movie</h2>
      <br>
      <h2 v-bind:class="{promoted: isPromoted, new: !isSoldout, 'sold-out': isSoldout}">Object Conditional Movie</h2> 
      <!-- Apply more than one class in an element using an Object-->
  </div>
</template>

<script>
export default {
    name: "ClassBinding",
    data(){
      return{
        status: "danger",
        isPromoted: true,
        isSoldout: false,
      }
    }
}
</script>

<style>
div{
  text-align: center;
}
.underline{
    text-decoration: underline;
}
.danger{
    color: red;
}
.promoted{
    font-style: italic;
}
.new{
    color: green;
}
.sold-out{
    color: red;
}
</style>