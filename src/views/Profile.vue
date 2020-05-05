<template>
    <div>
        <div class="media">
            <img src="../assets/lady.png" class="mr-3" alt="..." width="70px" height="70px">
            <div class="media-body">
                <h3 class="mt-0">{{user.name}}</h3>
                <h5>{{user.email}}</h5>
                Joined at: {{joinedAt}}
            </div>
        </div>

        <div class="profile">
            <ArticleList v-bind:articles="getArticles"></ArticleList>
        </div>

    </div>
</template>

<script>

import moment from 'moment';
import { mapGetters, mapActions } from 'vuex';
import ArticleList from '../components/ArticleList';
import axios from 'axios';

export default {
    name: 'Profile',
    data() {
        return{
            user:[]
        }
    },
    components: {
        ArticleList
    },
    computed: {
        ...mapGetters(['getUserData','getArticles']),

        joinedAt: function() {
            return moment(this.user.created_at).format('MMMM Do YYYY, h:mm:ss a');
        }
    },
    created() {
        var username = this.$route.params.username;
        
        const url = `http://localhost:8000/api/users/${username}`;
        //var userData = this.getUserData();
        const token = window.localStorage.getItem('access_token');
        axios.get(url,{
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then((res)=>{
            console.log(res);
            this.user = res.data;
            this.fetchUsersArticles(this.$route.params.username);
        });
    },
    methods: {
       ...mapActions(['fetchUsersArticles'])
    }
}
</script>

<style>

</style>