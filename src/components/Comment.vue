<template>
  <div>
      <h6>{{comment.user}}</h6>
      <p>{{comment.comment}}</p>
  </div>
</template>

<script>

export default {
    name: 'Comment',
    props: ['comment']
}
</script>

<style scoped>
h6{
    margin-bottom: 0;
}
</style>
