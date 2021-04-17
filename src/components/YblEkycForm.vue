<template>
  <div>
      <h1 class="title">Welcome to YBL e-KYC Home Page</h1>
      <form id="yblForm" novalidate autocomplete="off" @submit.prevent="yblFormSubmit">
          <div class="input-control">
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" v-model="yblKyc.name" autofocus required minlength="2" maxlength="30" />          
        </div>
          
          <div class="input-control">
          <label for="dob">Date of Birth:</label>
          <input type="date" name="dob" id="dob" v-model="yblKyc.dob" >
          </div>          
          <div class="input-control">
          <label for="gender">Gender:</label>
          <select name="gender" id="gender" v-model="yblKyc.gender">
              <option value="" disabled>Choose Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
          </select>
          </div>
          <div class="input-control">
          <label for="mobile">Mobile Number:</label>
          <input type="tel" name="mobile" id="mobile" v-model="yblKyc.mobileNo" >
          </div>
          <div class="input-control">
          <label for="pancard">PAN Card No.:</label>
          <input type="text" name="pancard" id="pancard" v-model="yblKyc.panCardNo" >
          </div>
          <div class="input-control">
          <label for="shopName">Shop Name:</label>
          <input type="text" name="shopName" id="shopName" v-model="yblKyc.shopName" >
          </div>
          <div class="input-control">
          <label for="aadhaarNo">Aadhaar Card:</label>
          <input type="tel" name="aadhaarNo" id="aadhaarNo" v-model="yblKyc.aadhaarNo" >
          </div>
          <div class="submit-btn">
              <button>Submit</button>
          </div>
      </form>
  </div>
  
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required,minLength,maxLength } from '@vuelidate/validators'
export default {
    name: "YblEkycForm",
    // setup(){
    //     return {
    //         v$: useVuelidate()
    //     }
    // },
    data(){
        return{
           v$: useVuelidate(),
            yblKyc: {
                name: "",
                dob: "",
                gender: "",
                mobileNo: null,
                panCardNo: "",
                shopName: "",
                aadhaarNo: null
            },
        }
    },
    validations(){
        return{
            name: { required, minLength: minLength(2), maxLength: maxLength(30) },
            dob: { required },
            gender: { required },
            mobileNo: { required },
            panCardNo: { required },
            shopName: { required },
            aadhaarNo: { required },
        }
    },
    methods: {
        yblFormSubmit(){
                console.log('Form data: ', this.yblKyc);
        }
    },
}
</script>

<style scoped>
    #yblForm{
        border: 1px solid black;
        width: 50%;
        margin: 20px auto;
        padding: 10px;
        border-radius: 10px;
        overflow: auto;
        height: 66vh;
    }
    .title{
        text-align: center;
        font-size: 2rem;
        color: blue;
        text-decoration: underline;
    }
    label{
        font-size: 1.4rem;
        padding: 10px;
        float: left;
    }
    input,select{
        padding: 10px;
        border-radius: 15px;
        outline: none;
        width: 50%;
        font-size: 1.2rem;
    }
    .input-control{
        margin: 10px;
    }
     button{
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
        border-radius: 20px;
        outline: none;
        cursor: pointer;
        padding: 10px;
        width:100px;
    }
    .submit-btn{
        text-align: center;
    }
</style>