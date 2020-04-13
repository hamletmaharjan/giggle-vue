<template>
    <div>
        <div class="media">
            <img src="../assets/lady.png" class="mr-3" alt="..." width="70px" height="70px">
            <div class="media-body">
                <h3 class="mt-0">{{getUserData.name}}</h3>
                <h5>{{getUserData.email}}</h5>
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

export default {
    name: 'Profile',
    components: {
        ArticleList
    },
    computed: {
        ...mapGetters(['getUserData','getArticles']),

        joinedAt: function() {
            return moment(this.getUserData.created_at).format('MMMM Do YYYY, h:mm:ss a');
        }
    },
    created() {
        
        this.fetchUsersArticles(this.$route.params.username);
    },
    methods: {
       ...mapActions(['fetchUsersArticles'])
    }
}
</script>

<style>

</style>