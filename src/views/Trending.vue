<template>
  <div class="trending">
    <ul id="infinite-list">
      <ArticleList v-bind:articles="getArticles"></ArticleList>
    </ul>
    <Observer @intersect="intersected"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';
import ArticleList from '../components/ArticleList';
import Observer from '../components/Observer';

export default {
  name: 'Trending',
  data() {
    return {
      current_page: 1
    }
  },
  components: {
    ArticleList,
    Observer
  },
  methods:{
    ...mapActions(['fetchArticles','fetchMoreArticles']),

    intersected() {
      this.current_page++;
      this.fetchMoreArticles({page:this.current_page, type:'mu'})

    },
  
  },

  computed: mapGetters(['getArticles']),
  
  created(){
    this.fetchArticles('mu');
  }
  
    
  
}
</script>
