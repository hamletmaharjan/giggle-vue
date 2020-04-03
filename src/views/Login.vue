<template>
    <div>
        Login
        <label>Email</label>
        <input type="text" v-model="email">
        <label>Password</label>
        <input type="password" v-model="password">
        <button v-on:click="onSumbit">Login</button>

        <br>
        {{token}}

    </div>
</template>


<script>
import { mapActions } from 'vuex';
import axios from 'axios';


export default {
    name: 'Login',
    data(){
        return {
            email:'',
            password:'',
            token:[]
        }
    },

    methods: {


        onSumbit: function() {
            // this.$emit('loginData',{email: this.email, password: this.password});
            console.log(this.email+ ' '+ this.password);
            const formData = new FormData();
            formData.append('email',this.email);
            formData.append('password',this.password);
            axios.post('http://localhost:8000/api/auth/login',formData,{
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type':'application/json'
                }
            }).then( (res) => {
                this.logIn(res.data);
                })
                .catch(function (error) {
                    console.log(error);
            });

            
        },
        ...mapActions(['logIn'])
    }
}
</script>