<template>
    <div>
        <h1>404</h1>
        <h2>Sorry, Page Not Found</h2>
        <br><br>
        <div class="redirectbtn">
        <button @click="redirectHomePage">Redirect to Home Page</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageNotFound",
    methods: {
        redirectHomePage(){
            this.$router.push({name: "TextBinding"});
        }
    }
}
</script>
<style scoped>
    h1{
        text-align: center;
        font-size: 5rem;
        color: red;
        font-weight: bold;
    }
    h2{
        text-align: center;
        font-size: 3rem;
        font-family: cursive;
    }
    button{
        border-radius: 30px;
        background: rgb(240, 182, 117);
        color: black;
        font-weight: bold;
        font-size: 1rem;
        padding: 10px;
    }
    button:hover{
        background: rgb(125, 202, 160);
    }
    button:focus{
        outline: none;
    }
    .redirectbtn{
        text-align: center;
    }
</style>