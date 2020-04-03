<template>
    <div>
        <div v-for="article in articles" :key="article.id">
            {{article.title}}
        </div>
    </div>
</template>


<script>

export default {
    name: 'ArticleList',
    props:['articles']
}
</script>