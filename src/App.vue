<template>
    <h1 class="title">Vue 3 Application 2021</h1>
  <div class="container">
    <aside>
      <ul>
        <li><router-link :to="{name: 'TextBinding'}">Text Binding</router-link></li>
        <li><router-link :to="{name: 'HtmlBinding'}">Html Binding</router-link></li>
        

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
<style>

.container{
  display: flex;
  flex-wrap: wrap;
}
.title{
  background: rgb(218, 196, 99);
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
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  border-bottom: 1px dotted black;
  padding: 10px;
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
  background: rgb(213, 245, 125);
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

</style>
