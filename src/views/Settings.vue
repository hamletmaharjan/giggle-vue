<template>
  <div>
    <h1>Settings</h1>
    <div class="row">
      <div class="col-3">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
          <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
          <a class="nav-link" id="v-pills-account-tab" data-toggle="pill" href="#v-pills-account" role="tab" aria-controls="v-pills-account" aria-selected="false">Account</a>
          <a class="nav-link" id="v-pills-password-tab" data-toggle="pill" href="#v-pills-password" role="tab" aria-controls="v-pills-password" aria-selected="false">Password</a>
        </div>
      </div>
      <div class="col-9">
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <h3>Profile</h3>
            <label>Avatar</label>
            <div>
              <img src="../assets/lady.png" height="100px" width="100px">
              <input type="file" name="avatar">
            </div>
            <div class="form-group">
              <label>Your Name</label>
              <input type="text" class="form-control" name="username" v-model="profile.name">
            </div>
            <div class="form-group">
              <label for="inputState">Gender</label>
              <select name="gender" class="form-control" v-model="profile.gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div class="form-group">
              <label>Birthday</label>
              <input type="date" class="form-control" name="username" v-model="profile.date_of_birth">
            </div>
            
            <div class="form-group purple-border">
              <label for="exampleFormControlTextarea4">Bio</label>
              <textarea class="form-control" v-model="profile.bio" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" v-on:click="onProfileChange">Save Changes</button>
          </div>


          <div class="tab-pane fade" id="v-pills-account" role="tabpanel" aria-labelledby="v-pills-account-tab">
            <h3>Account</h3>
            <div>
              <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" name="username" v-bind:value="profile.username">
                <small class="form-text text-muted">giggle.com/{{profile.username}}</small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" v-bind:value="profile.email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <button type="submit" class="btn btn-primary" v-on:click="onAccountChange">Save Changes</button>
            </div>
          </div>


          <div class="tab-pane fade" id="v-pills-password" role="tabpanel" aria-labelledby="v-pills-password-tab">
            <h3>Password</h3>
            <div>
              <div class="form-group">
                <label>Old Password</label>
                <input type="password" class="form-control"  v-model="old_password">
              </div>
              <div class="form-group">
                <label>New Password</label>
                <input type="password" class="form-control"  v-model="new_password">
              </div>
              <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="form-control"  v-model="confirm_password">
              </div>
              <button type="submit" class="btn btn-primary" v-on:click="onPasswordChange">Save Changes</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';
const token = window.localStorage.getItem('access_token');


export default {
    name: 'Settings',
    data() {
      return {
        profile: [],
        old_password:'',
        new_password:'',
        confirm_password:''
      }
    },
    methods: {
      ...mapGetters(['getUserData']),

      onProfileChange() {
        console.log('on profile change');
      },

      onAccountChange() {
        console.log('on account change');
      },

      onPasswordChange() {
        console.log('on password change');
        var formData = new FormData();
        formData.append('_method','PATCH');
        formData.append('old_password', this.old_password);
        formData.append('new_password', this.new_password);
        formData.append('confirm_password', this.confirm_password);
        var url = `${ROOT_URL}/users/password/change`;
        if(token){
          axios.post(url, formData, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
          }).then((res)=>{
            console.log(res.data);
            this.old_password = '';
            this.new_password = '';
            this.confirm_password = '';
          });
        }
      }
    },
    created() {
      const url = `http://localhost:8000/api/me`;
      //var userData = this.getUserData();
      const token = window.localStorage.getItem('access_token');
      axios.get(url,{
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then((res)=>{
          console.log(res);
          this.profile = res.data;
        });
        
    }
}
</script>

