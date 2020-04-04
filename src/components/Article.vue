<template>
    <div>
        <a href="#"><h2>{{article.title}}</h2></a>
        <img v-bind:src="imageUrl">
        <p>{{article.upvotes}} upvotes | {{article.comments}} comments</p> <hr>
    </div>
</template>


<script>
export default {
    name: 'Article',
    props: ['article'],
    computed:{
        imageUrl: function() {
            return 'http://localhost:8000'+ this.article.image;
        }
    }
}
</script>