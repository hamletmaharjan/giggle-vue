<template>
  <div class="home">
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
  name: 'Home',
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
      this.fetchMoreArticles({page:this.current_page, type:null})

      
      // const items = await res.json();
      // this.items = [...this.items, ...items];
    },

    // listener: function() {
    //   let vm = this;
    //   window.addEventListener("scroll", function() {
    //   var height = document.documentElement.offsetHeight,
    //   // Get the current offset - how far "scrolled down"
    //   offset = document.documentElement.scrollTop + window.innerHeight;

    //   // Check if user has hit the end of page
    //   // console.log('Height: ' + height);
    //   // console.log('Offset: ' + offset);
      
    //     if (offset === height) { 
          
    //       vm.loadMore();
        
    //     }
    //   });
    // },

    // loadMore: function() {
    //   this.current_page++;
    //   this.fetchMoreArticles({page:this.current_page, type:null});
    // }
  
  },

  computed: mapGetters(['getArticles']),
  
  created(){
    this.fetchArticles(null);
    // this.listener();
  }
  
    
  
}
</script>
