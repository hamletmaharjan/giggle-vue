<template>
    <div>
        
        <label>Username</label>
        <input type="text" v-model="username"><br>
        <label>Email</label>
        <input type="text" v-model="email"><br>
        <label>Password</label>
        <input type="password" v-model="password"> <br>
        <label>Retype Password</label>
        <input type="password" v-model="password_confirmation"> <br>
        <button v-on:click="onSumbit">Login</button>


    </div>
</template>


<script>
import axios from 'axios';
import router from '../router/index';

export default {
    name: 'Signup',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    },

    methods: {
        onSumbit: function() {
            const formData = new FormData();
            formData.append('name', this.username);
            formData.append('email',this.email);
            formData.append('password',this.password);
            formData.append('password_confirmation', this.password_confirmation);
            axios.post('http://localhost:8000/api/auth/signup',formData,{
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type':'application/json'
                }
            }).then( (res) => {
                console.log(res);
                router.push('/login');
                })
                .catch(function (error) {
                    console.log(error);
            });
            
        }
    }
}
</script>