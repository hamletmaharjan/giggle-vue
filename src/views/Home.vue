<template>
  <div class="home">
    Hottest Articles
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    
  },
  methods:mapGetters(['getAccessToken','getData']),
  computed: {
    token: function() {
      return this.getAccessToken;
    }
  },
  created(){
    console.log(this.getData());
  }
}
</script>
