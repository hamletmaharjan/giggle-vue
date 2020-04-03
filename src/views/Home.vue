<template>
  <div class="home">
    Hottest Articles
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    
  },
  methods:mapActions(['fetchArticles']),
  computed: {
    token: function() {
      return this.getAccessToken;
    }
  },
  created(){
    this.fetchArticles();
  }
}
</script>
