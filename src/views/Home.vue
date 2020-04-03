<template>
  <div class="home">
    <ArticleList v-bind:articles="getArticles"></ArticleList>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';
import ArticleList from '../components/ArticleList';

export default {
  name: 'Home',
  components: {
    ArticleList
  },
  methods:mapActions(['fetchArticles']),

  computed: mapGetters(['getArticles']),
  
  created(){
    this.fetchArticles();
  }
}
</script>
