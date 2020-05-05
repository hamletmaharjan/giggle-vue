<template>
    <div>
        <!-- <router-link v-bind:to="articleUrl"><h2>{{article.title}}</h2></router-link>
        <img v-bind:src="imageUrl"> -->
        <div class="card">
            <div class="card-header">
                <router-link v-bind:to="articleUrl"><h2>{{article.title}}</h2></router-link>
            </div>
            <div class="card-body">
               <img v-bind:src="imageUrl">
            </div>
        

        <div class="row">
            <div class="col-sm-6">
                <div v-if="is_upvoted">
                    <img class="hover" src="../assets/upvote-btn-orange.png" v-on:click="onUpvoteToggle" height="25px" width="25px">
                </div>
                <div v-else>
                    <img class="hover" src="../assets/upvote-btn.png" v-on:click="onUpvoteToggle" height="25px" width="25px">
            </div>
                    <!-- <img v-on:click="upvoteToggle" class="hover" v-bind:src="upvoteUrl"  height="25px" width="25px"> -->
                {{article.upvotes}} upvotes | {{article.comments}} comments
                <div class="dropdown">
                    <img src="../assets/dot.png" height="30px" width = "30px">
                    <div class="dropdown-content" v-if="article.is_self">
                        <a href="#">Share</a>
                        <a href="#">Edit</a>
                        <a href="#" v-on:click="onDelete">Delete</a>
                    </div>
                    <div class="dropdown-content" v-else>
                        <a href="#">Share</a>
                        <a href="#">Report</a>
                    </div>
                </div>
                
                <hr>
            </div>
            <div class="col-sm-6">
                
            </div>
        </div>

        </div>
        
    </div>
</template>


<script>

import { mapGetters, mapActions } from 'vuex';
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
        ...mapActions(['deleteArticle']),
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

        },

        onDelete() {
            this.deleteArticle(this.article.id);
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


/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}



/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}

</style>