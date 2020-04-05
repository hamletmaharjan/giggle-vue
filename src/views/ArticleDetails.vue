<template>
    <div>
        <a href="#"><h2>{{getArticle.title}}</h2></a>
        <p>OP: {{getArticle.op}}</p>
        <img v-bind:src="imageUrl">
        <p>{{getArticle.upvotes}} upvotes | {{getArticle.comments_count}} comments</p> <hr>

        <div class="input-group mb-3">
            <input v-on:input="onInput" class="form-control" placeholder="Leave a comment...">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" v-on:click="onComment">Submit</button>
            </div>
        </div>

        <div v-for="comments in getArticle.comments" :key="comments.comment_id">
            <Comment v-bind:comment="comments"></Comment>
        </div>
    </div>
</template>


<script>
//import axios from 'axios';


import { mapActions, mapGetters } from 'vuex';
import Comment from '../components/Comment.vue';

//const ROOT_URL = 'http://localhost:8000/api';


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
        ...mapActions(['fetchSingleArticle','postComment']),
        ...mapGetters(['getAccessToken']),
        onInput: function(event) {
            this.userComment = event.target.value
        },
        onComment: function() {
            console.log(this.userComment);
            const articleId = this.$route.params.id;
            const data = {articleId: articleId, userComment: this.userComment}
            this.postComment(data);
            //this.fetchSingleArticle(this.$route.params.id);
            // const url = `${ROOT_URL}/articles/${articleId}/comments`;
            // const formData = new FormData();
            // const token = this.getAccessToken();
            // formData.append('comment',this.userComment);

            // axios.post(url,formData,
            //     {
            //     headers: {
            //         'X-Requested-With': 'XMLHttpRequest',
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${token}`
            //     }
            // }).then( (res) => {
            //     this.logIn(res.data);
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            // });
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