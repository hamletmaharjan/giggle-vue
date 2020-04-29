<template>
    <div>
        Login
        <label>Email</label>
        <input type="text" v-model="email"><br>
        <label>Password</label>
        <input type="password" v-model="password"> <br>
        <button v-on:click="onSumbit">Login</button>


    </div>
</template>


<script>
import { mapActions } from 'vuex';
import axios from 'axios';
import router from '../router/index';


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
            
            const formData = new FormData();
            formData.append('email',this.email);
            formData.append('password',this.password);
            axios.post('http://localhost:8000/api/auth/login',formData,{
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type':'application/json'
                }
            }).then( (res) => {
                this.login(res.data);
                window.localStorage.setItem('expires_at',res.data.expires_at);
                router.push('/');
                })
                .catch(function (error) {
                    console.log(error);
            });

            
        },
        ...mapActions(['login','fetchUserData'])
    }
}
</script>