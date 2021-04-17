<template>
  <div>
      <h1 class="title">Welcome to YBL e-KYC Home Page</h1>
      <form id="yblForm" novalidate autocomplete="off" @submit.prevent="yblFormSubmit">
          <div class="input-control">
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" v-model="v$.yblKyc.name.$model" autofocus 
          v-bind:class="{error: v$.yblKyc.name.$error, valid: v$.yblKyc.name.$dirty && !v$.yblKyc.name.$invalid}"/>          
           <template v-if="v$.yblKyc.name.$dirty">
                <div v-for="error of v$.yblKyc.name.$silentErrors" :key="error.$message" :style="errorStyle" >
                {{ error.$message }}
                </div>
            </template>
            </div>
          
          <div class="input-control">
          <label for="dob">Date of Birth:</label>
          <input type="date" name="dob" id="dob" v-model="v$.yblKyc.dob.$model" 
          v-bind:class="{error: v$.yblKyc.dob.$error, valid: v$.yblKyc.dob.$dirty && !v$.yblKyc.dob.$invalid}">
          <template v-if="v$.yblKyc.dob.$dirty">
                <div v-for="error of v$.yblKyc.dob.$silentErrors" :key="error.$message" :style="errorStyle">
                {{ error.$message }}
                </div>
            </template>
          </div>          
          <div class="input-control">
          <label for="gender">Gender:</label>
          <select name="gender" id="gender" v-model="v$.yblKyc.gender.$model"
          v-bind:class="{error: v$.yblKyc.gender.$error, valid: v$.yblKyc.gender.$dirty && !v$.yblKyc.gender.$invalid}">
              <option value="choose" disabled>Choose Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
          </select>
          <template v-if="v$.yblKyc.gender.$dirty">
                <div v-for="error of v$.yblKyc.gender.$silentErrors" :key="error.$message" :style="errorStyle">
                {{ error.$message }}
                </div>
            </template>
          </div>
          <div class="input-control">
          <label for="mobile">Mobile Number:</label>
          <input type="tel" name="mobile" id="mobile" v-model="v$.yblKyc.mobileNo.$model" 
          v-bind:class="{error: v$.yblKyc.mobileNo.$error, valid: v$.yblKyc.mobileNo.$dirty && !v$.yblKyc.mobileNo.$invalid}">
           <template v-if="v$.yblKyc.mobileNo.$dirty">
                <div v-for="error of v$.yblKyc.mobileNo.$silentErrors" :key="error.$message" :style="errorStyle">
                {{ error.$message }}
                </div>
            </template>
          </div>
          <div class="input-control">
          <label for="pancard">PAN Card No.:</label>
          <input type="text" name="pancard" id="pancard" v-model="v$.yblKyc.panCardNo.$model" 
          v-bind:class="{error: v$.yblKyc.panCardNo.$error, valid: v$.yblKyc.panCardNo.$dirty && !v$.yblKyc.panCardNo.$invalid}">
          <template v-if="v$.yblKyc.panCardNo.$dirty">
                <div v-for="error of v$.yblKyc.panCardNo.$silentErrors" :key="error.$message" :style="errorStyle">
                {{ error.$message }}
                </div>
            </template>
          </div>
          <div class="input-control">
          <label for="shopName">Shop Name:</label>
          <input type="text" name="shopName" id="shopName" v-model="v$.yblKyc.shopName.$model" 
          v-bind:class="{error: v$.yblKyc.shopName.$error, valid: v$.yblKyc.shopName.$dirty && !v$.yblKyc.shopName.$invalid}">
          <template v-if="v$.yblKyc.shopName.$dirty">
                <div v-for="error of v$.yblKyc.shopName.$silentErrors" :key="error.$message" :style="errorStyle">
                {{ error.$message }}
                </div>
            </template>
          </div>
          <div class="input-control">
          <label for="aadhaarNo">Aadhaar Card:</label>
          <input type="tel" name="aadhaarNo" id="aadhaarNo" v-model="v$.yblKyc.aadhaarNo.$model"
          v-bind:class="{error: v$.yblKyc.aadhaarNo.$error, valid: v$.yblKyc.aadhaarNo.$dirty && !v$.yblKyc.aadhaarNo.$invalid}">
          <template v-if="v$.yblKyc.aadhaarNo.$dirty">
                <div v-for="error of v$.yblKyc.aadhaarNo.$silentErrors" :key="error.$message" :style="errorStyle">
                {{ error.$message }}
                </div>
            </template>
          </div>
          <div class="submit-btn">
              <button>Submit</button>
              <button type="reset" @click="resetForm">Reset</button>
          </div>
         
      </form>
  </div>
  
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required,minLength,maxLength } from '@vuelidate/validators'
export default {
    name: "YblEkycForm",
    setup(){
        return {
            v$: useVuelidate()
        }
    },
    data(){
        return{
            yblKyc: {
                name: "",
                dob: "",
                gender: "",
                mobileNo: null,
                panCardNo: "",
                shopName: "",
                aadhaarNo: null
            },
            errorStyle: {
                color: 'red',
                fontWeight:'bold',
                fontSize:'1.1rem',
                marginTop:'6px'
            },
            //Verhoeff Algorithm

            // multiplication table
            d : [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
            [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
            [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
            [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
            [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
            [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
            [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
            [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
            [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
            ],
        
            // permutation table
             p : [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
            [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
            [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
            [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
            [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
            [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
            [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
            ]
        }
    },
    validations(){
        return{
            yblKyc:{
            name: { required, minLength: minLength(2), maxLength: maxLength(30) },
            dob: { required },
            gender: { required },
            mobileNo: { required, minLength:minLength(10), maxLength:maxLength(10)},
            panCardNo: { required, minLength:minLength(10), maxLength:maxLength(10)},
            shopName: { required, minLength: minLength(2), maxLength: maxLength(30)},
            aadhaarNo: { required, minLength:minLength(12), maxLength:maxLength(12)}
            }
        }
    },
    methods: {
        yblFormSubmit(){
            this.v$.$touch();
            if (this.v$.$error) return;
            else {
                
                console.log('Form data: ', this.yblKyc);
            }
        },
        resetForm(){
            this.v$.$reset();
             this.yblKyc = {
                name: "",
                dob: "",
                gender: "",
                mobileNo: null,
                panCardNo: "",
                shopName: "",
                aadhaarNo: null
            }
        },
        // validates Aadhar number received as string

        validateAadhaarNo(aadhaar){
                let c = 0
                let invertedArray = aadhaar.split('').map(Number).reverse();
                invertedArray.forEach((val, i) => {
                c = this.d[c][this.p[(i % 8)][val]]
                })
                return (c === 0)
                }
    },

    verifyAadhaar(){
        if(this.yblKyc.aadhaarNo && this.yblKyc.aadhaarNo.length==12){
            if(this.validateAadhaarNo(this.yblKyc.aadhaarNo)){
            alert('Your aadhar card no. valid');
        }else{
            alert('Your aadhar card no. not valid');
        }
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
        margin: 10px;
    }
    .submit-btn{
        text-align: center;
    }
    .error {
    border-color: red;
    background: #FDD;
    }

    .error:focus {
    outline-color: #F99;
    }

    .valid {
    border-color: #5A5;
    background: #EFE;
    }

    .valid:focus {
    outline-color: #8E8;
    }
</style>