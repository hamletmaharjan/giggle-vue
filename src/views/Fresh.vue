<template>
  <div class="fresh">
    <ul id="infinite-list">
      <ArticleList v-bind:articles="getArticles"></ArticleList>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';
import ArticleList from '../components/ArticleList';

export default {
  name: 'Fresh',
  data() {
    return {
      current_page: 1
    }
  },
  components: {
    ArticleList
  },
  methods:{
    ...mapActions(['fetchArticles','fetchMoreArticles']),

    listener: function() {
      let vm = this;
      window.addEventListener("scroll", function() {
      var height = document.documentElement.offsetHeight,
      // Get the current offset - how far "scrolled down"
      offset = document.documentElement.scrollTop + window.innerHeight;

      // Check if user has hit the end of page
      // console.log('Height: ' + height);
      // console.log('Offset: ' + offset);
      
        if (offset === height) { 
          
          vm.loadMore();
        
        }
      });
    },

    loadMore: function() {
      this.current_page++;
      this.fetchMoreArticles({page:this.current_page, type:'new'});
    }
  
  },

  computed: mapGetters(['getArticles']),
  
  created(){
    this.fetchArticles('new');
    this.listener();
  }
  
    
  
}
</script>
