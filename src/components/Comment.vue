<template>
    <div>
        <h6>{{comment.user}}</h6> {{commentedAt}}                :
        {{comment.comment}}
        <div class="dropdown">
            <img src="../assets/dot.png" height="30px" width = "30px">
            <div class="dropdown-content" v-if="comment.is_self">
                <a href="#" v-on:click="onEdit">Edit</a>
                <a href="#" v-on:click="onDelete">Delete</a>
            </div>
            <div class="dropdown-content" v-else>
                <a href="#">Report</a>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import { mapActions } from 'vuex';
export default {
    name: 'Comment',
    props: ['comment'],

    computed: {
        commentedAt: function() {
            return moment(this.comment.created_at).fromNow();
        }
    },

    methods: {
        ...mapActions(['deleteComment']),
        onEdit: function(event) {
            event.preventDefault();
            console.log('on edit');
        },
        onDelete: function() {
            event.preventDefault();
            console.log('on delete');
            this.deleteComment(this.comment.comment_id);
        }
    }
}
</script>

<style scoped>
h6{
    margin-bottom: 0;
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
