<template>
    <div>
        <a href="#"><h2>{{getArticle.title}}</h2></a>
        <img v-bind:src="imageUrl">
        <p>{{getArticle.upvotes}} upvotes | {{getArticle.comments_count}} comments</p> <hr>
        <div v-for="comments in getArticle.comments" :key="comments.comment_id">
            <Comment v-bind:comment="comments"></Comment>
        </div>
    </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';
import Comment from '../components/Comment.vue';



export default {
    name: 'ArticleDetail',
    components:{
        Comment
    },

    methods: mapActions(['fetchSingleArticle']),
    computed: {...mapGetters(['getArticle']),
        imageUrl: function() {
            return 'http://localhost:8000'+ this.getArticle.image;
        }           

    },

    created() {
        this.fetchSingleArticle(this.$route.params.id);
    }
   
}
</script>