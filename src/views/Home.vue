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
  methods: mapGetters(['getAccessToken']),
  computed: {
    token: function() {
      return this.getAccessToken;
    }
  }
}
</script>
