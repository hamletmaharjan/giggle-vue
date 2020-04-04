<template>
    <div>
        <a href="#"><h2>{{getArticle.title}}</h2></a>
        <img v-bind:src="imageUrl">
        <p>{{getArticle.upvotes}} upvotes | {{getArticle.comments_count}} comments</p> <hr>

        <div class="input-group mb-3">
            <input v-on:input="onInput" class="form-control" placeholder="Leave a comment...">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" v-on:click="postComment">Button</button>
            </div>
        </div>

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
    data() {
        return {
            userComment: ''
        }
    },
    components:{
        Comment
    },

    methods: {
        ...mapActions(['fetchSingleArticle']),
        onInput: function(event) {
            this.userComment = event.target.value
        },
        postComment: function() {
            console.log(this.userComment);
        }
    },
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