<template>
    <div>
        <div class="media">
            <img src="../assets/lady.png" class="mr-3" alt="..." width="70px" height="70px">
            <div class="media-body">
                <h3 class="mt-0">{{getUserData.name}}</h3>
                <h5>{{getUserData.email}}</h5>
                {{$route.params.username}}
            </div>
        </div>

        <div class="profile">
            <ArticleList v-bind:articles="getArticles"></ArticleList>
        </div>

    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import ArticleList from '../components/ArticleList';

export default {
    name: 'Profile',
    components: {
        ArticleList
    },
    computed: {
        ...mapGetters(['getUserData','getArticles']),
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