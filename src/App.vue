<template>
  <div id="app">
    <NavBar v-bind:notifications="notifications"></NavBar>
    <div  class="container">
      <router-view/>
    </div>
    
  </div>
</template>

<script>

import NavBar from './components/NavBar';
import { mapGetters } from 'vuex';

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');


// window.Echo = new Echo({
//   broadcaster: 'pusher',
//   key: 'aae2f794d62d3f7a9ef4',
//   cluster: 'ap2',
//   forceTLS: true
// });

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      notifications:[]
    }
  },
  methods: {
    ...mapGetters(['getAccessToken','getUserData'])
  },


  created() {
    
    const token = this.getAccessToken();
    const user = this.getUserData();
    if(token && user){
      const userId = user.id;
      const options = {
        broadcaster: 'pusher',
        key: 'aae2f794d62d3f7a9ef4',
        cluster: 'ap2',
        forceTLS: true,
        authEndpoint: 'http://localhost:8000/api/broadcasting/auth',
        
        auth: {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
        },
      };
      const echo = new Echo(options);

      // echo.private(`user.${userId}`)
      // .listen('Commented', (e) => {
      //     console.log(e);
      //     this.notifications.push(e);
      // });
      echo.private('App.User.' + userId)
      .notification((notification) => {
        console.log(notification);
        this.notifications.push(notification);
    });
    }
    
  }
}
</script>
