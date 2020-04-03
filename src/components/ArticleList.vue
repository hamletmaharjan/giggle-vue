<template>
    <div>
        <!-- <div v-for="article in articles" :key="article.id">
            {{article.title}}
        </div> -->
        <Article v-for="article in articles" :key="article.id" v-bind:article="article"></Article>
    </div>
</template>


<script>
import Article from './Article';
export default {
    name: 'ArticleList',
    props:['articles'],
    components: {
        Article
    }
}
</script>