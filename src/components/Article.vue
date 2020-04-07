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

import upvoted from '../assets/upvote-btn-orange.png';
import upvote from '../assets/upvote-btn.png';

export default {
    name: 'Article',
    props: ['article'],
    data() {
        return {
            upvoteImg:upvote,
            is_upvoted: false
        }
    },
    computed:{
        imageUrl: function() {
            return 'http://localhost:8000'+ this.article.image;
        },
        articleUrl() {
            return '/articles/'+ this.article.id;
        },

        upvoteUrl: function() {
            if(this.article.is_upvoted) {
                
                return upvoted;
            }
            else {
                return this.upvoteImg;
            }
            
        },

        
    },
    methods: {
        onUpvoteToggle: function() {
            console.log('clicked');
            this.is_upvoted = !this.is_upvoted;
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