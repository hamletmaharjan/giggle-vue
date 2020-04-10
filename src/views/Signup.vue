<template>
    <div>
        
        <!-- <label>Username</label>
        <input type="text" v-model="username"><br>
        <label>Email</label>
        <input type="text" v-model="email"><br>
        <label>Password</label>
        <input type="password" v-model="password"> <br>
        <label>Retype Password</label>
        <input type="password" v-model="password_confirmation"> <br>
        <button v-on:click="onSumbit">Login</button> -->

        <div>
            <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" v-model="name">
                </div>
            </div>
            <div class="form-group row">
                <label for="username" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" v-model="username">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="email" class="form-control" v-model="email">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" v-model="password">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" v-model="password_confirmation">
                </div>
            </div>
            <fieldset class="form-group">
                <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="gender" value="male" checked>
                    <label class="form-check-label" for="gridRadios1">
                        Male
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="gender" value="female">
                    <label class="form-check-label" for="gridRadios2">
                        Female
                    </label>
                    </div>
                </div>
                </div>
            </fieldset>
            <div class="form-group row">
                <label for="dob" class="col-sm-2 col-form-label">Birthday</label>
                <div class="col-sm-10">
                <input type="date" class="form-control" v-model="date_of_birth">
                </div>
            </div>
            
            <div class="form-group row">
                <div class="col-sm-10">
                <button type="submit" class="btn btn-primary" v-on:click="onSumbit">Sign up</button>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
import axios from 'axios';
import router from '../router/index';

export default {
    name: 'Signup',
    data() {
        return {
            name: '',
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            gender: '',
            date_of_birth: ''
            
        }
    },

    methods: {
        onSumbit: function() {
            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('username', this.username);
            formData.append('email', this.email);
            formData.append('password', this.password);
            formData.append('password_confirmation', this.password_confirmation);
            formData.append('gender', this.gender);
            formData.append('date_of_birth', this.date_of_birth);
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