<template>
    <h1 class="title" @click="$router.push('/')">Vue 3 Application 2021</h1>
  <div class="container">
    <aside>
      <ul>
        <div class="yblbtn">
        <router-link :to="{name: 'YblEKyc'}"><button class="yblekycbtn">YBL EKYC</button></router-link>
        </div>
        <hr>
        <li><router-link :to="{name: 'TextBinding'}">Text Binding (v-text)</router-link></li>
        <li><router-link :to="{name: 'HtmlBinding'}">Html Binding (v-html)</router-link></li>
        <li><router-link :to="{name: 'AttributeBinding'}">Attribute Binding (v-bind:attribute)</router-link></li>      
        <li><router-link :to="{name: 'ClassBinding'}">Class Binding (v-bind:class)</router-link></li>        
        <li><router-link :to="{name: 'StyleBinding'}">Style Binding (v-bind:style)</router-link></li>        
        <li><router-link :to="{name: 'ConditionalRendering'}">Conditional Rendering (v-if,v-else)</router-link></li> 
        <li><router-link :to="{name: 'ListRendering'}">List Rendering (v-for)</router-link></li>  
        </ul>
    </aside>
    <section>
      <router-view />
  </section>
  </div>
  <footer>
    <h2>Vue 3 Application 2021</h2>
    <h3>This Website is maintained by Shubham Singh &copy; All Rights Reserved 2021</h3>
  </footer>
</template>
<style scoped>

.container{
  display: flex;
  flex-wrap: wrap;
}
.title{
  background: rgb(221, 216, 221);
  padding: 10px;
  text-decoration: underline;
  text-align: center;
  color: brown;
}
aside{
  width: 20%;
  background: rgba(157, 231, 157, 0.753);
  border: 1px solid black;
  height: 79vh;
  overflow: auto;
}
ul li{
  font-size: 1.3rem;
  font-weight: bold;
  color: black;
  border-bottom: 1px dotted black;
  padding: 7px;
}
aside ul li a{
  text-decoration: none;
}
 a.router-link-exact-active {
  color: #a51280;
}
li:hover{
  background: rgb(226, 116, 131);
}
section{
  width: 80%;
  border: 1px solid black;
  overflow: auto;
}
footer{
  background: rgb(219, 160, 150);
  text-align: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.yblekycbtn{
  margin:5px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 10px;
  
}
.yblekycbtn:hover{
  background: rgb(90, 202, 114);
}
.yblbtn{
  text-align: center;
}
</style>
