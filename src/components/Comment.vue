<template>
  <div>
      <h6>{{comment.user}}</h6> {{commentedAt}}
      <p>{{comment.comment}}</p>
  </div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'Comment',
    props: ['comment'],

    computed: {
        commentedAt: function() {
            return moment(this.comment.created_at).fromNow();
        }
    }
}
</script>

<style scoped>
h6{
    margin-bottom: 0;
}
</style>
