<template>
    <div>
        <router-link v-bind:to="articleUrl"><h2>{{article.title}}</h2></router-link>
        <img v-bind:src="imageUrl">
        <div class="row">
            <div class="col-sm-6">
                <div v-if="is_upvoted">
                    <img class="hover" src="../assets/upvote-btn-orange.png" v-on:click="onUpvoteToggle" height="25px" width="25px">
                </div>
                <div v-else>
                    <img class="hover" src="../assets/upvote-btn.png" v-on:click="onUpvoteToggle" height="25px" width="25px">
            </div>
                    <!-- <img v-on:click="upvoteToggle" class="hover" v-bind:src="upvoteUrl"  height="25px" width="25px"> -->
                <p>{{article.upvotes}} upvotes | {{article.comments}} comments</p> <hr>
            </div>
            <div class="col-sm-6">
                
            </div>
        </div>
        
    </div>
</template>


<script>

import { mapGetters } from 'vuex';
import axios from 'axios';
// import upvoted from '../assets/upvote-btn-orange.png';
// import upvote from '../assets/upvote-btn.png';

export default {
    name: 'Article',
    props: ['article'],
    data() {
        return {
            
            is_upvoted: false
        }
    },
    computed:{
        imageUrl: function() {
            return 'http://localhost:8000'+ this.article.image;
        },
        articleUrl() {
            return '/articles/'+ this.article.id;
        }

        
    },
    methods: {
        ...mapGetters(['getAccessToken']),
        onUpvoteToggle: function() {
            console.log(this.article.id);
            this.is_upvoted = !this.is_upvoted;
            const token = this.getAccessToken();
            const formData = new FormData();
            formData.append('article_id',this.article.id);
            axios.post('http://localhost:8000/api/article/upvote',formData,{
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
                }
            }).then( (res) => {
                console.log(res);
                })
                .catch(function (error) {
                    console.log(error);
            });   

        }
    },

    created() {
        if(this.article.is_upvoted) {
            this.is_upvoted = true;
        }
        else {
            this.is_upvoted = false;
        }
    }
}
</script>

<style scoped>
.hover {
    cursor: pointer;
}
</style>