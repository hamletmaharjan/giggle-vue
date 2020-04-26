<template>
    <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div> -->
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Giggle</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/" exact>Front Page</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/trending">Trending</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/fresh">Fresh</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sections
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Nepali</a>
                    <a class="dropdown-item" href="#">Pictures</a>
                    <div class="dropdown-divider">Funny</div>
                    <a class="dropdown-item" href="#">Dark Humor</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                </ul>
                <!-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> -->
                <ul class="navbar-nav" v-if="isLoggedIn">
                    
                    
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <li class="nav-item dropdown">
                       
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <img src="../assets/bell.png" height="30px" width="30px">    
                            <span class="badge badge-danger ml-2">{{notifications.length}}</span>
                        </a>
                        <ul class="dropdown-menu notify-drop">
                            <!-- <div class="notify-drop-title">
                                <div class="row">
                                    <div class="col-md-6 col-sm-6 col-xs-6">Bildirimler (<b>2</b>)</div>
                                    <div class="col-md-6 col-sm-6 col-xs-6 text-right"><a href="" class="rIcon allRead" data-tooltip="tooltip" data-placement="bottom" title="tümü okundu."><i class="fa fa-dot-circle-o"></i></a></div>
                                </div>
                            </div> -->
                            <div class="drop-content" v-for="notification in notifications" :key="notification.id">
                                <li>
                                    {{notification.username}} commented on your article
                                    <!-- <div class="col-md-3 col-sm-3 col-xs-3"><div class="notify-img"><img src="http://placehold.it/45x45" alt=""></div></div>
                                    <div class="col-md-9 col-sm-9 col-xs-9 pd-l0"><a href="">Ahmet</a> yorumladı. <a href="">Çicek bahçeleri...</a> <a href="" class="rIcon"><i class="fa fa-dot-circle-o"></i></a>
                                    
                                    <hr>
                                    <p class="time">Şimdi</p>
                                    </div> -->
                                </li>
                            </div>
                        </ul>
                        
                    </li>
                    <!-- <li class="nav-item">
                        <router-link class="nav-link" to=""><img src="../assets/bell.png" height="30px" width="30px" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span class="badge badge-danger ml-2">{{notifications.length}}</span></router-link>
                        <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                            <a class="dropdown-item waves-effect waves-light" href="#">Action <span class="badge badge-danger ml-2">4</span></a>
                            <a class="dropdown-item waves-effect waves-light" href="#">Another action <span class="badge badge-danger ml-2">1</span></a>
                            <a class="dropdown-item waves-effect waves-light" href="#">Something else here <span class="badge badge-danger ml-2">4</span></a>
                        </div>
                    </li> -->
                    <li class="nav-item dropdown">
                        <!-- <router-link class="nav-link" to=""><img src="../assets/lady.png" height="30px" width="30px"></router-link> -->

                        <router-link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="../assets/lady.png" height="30px" width="30px">
                        </router-link>
                        
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link class="dropdown-item" v-bind:to="myProfileLink">My Profile</router-link>
                            <router-link class="dropdown-item" to="/settings">Settings</router-link>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" v-on:click="onLogout">Logout</a>
                        </div>

                    </li>
                    
                    <li class="nav-item">
                        <router-link class="nav-link btn btn-primary" to="" data-toggle="modal" data-target="#exampleModal">Upload</router-link>
                    </li>
                    
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Upload a post...</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label>Picture</label>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="file" ref="file" accept="image/*" v-on:change="onFileChange"> <br>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label>Title</label>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" v-model="title">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label>Description</label>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text" v-model="description">
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" v-on:click="onPostSubmit">Submit</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    
                </ul>
                <ul v-else class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/signup">Signup</router-link>
                    </li>
                </ul>

                <!-- <router-link v-else class="nav-link" to="/login">Login</router-link> -->
            </div>
        </nav>
    </div>
</template>


<script>

import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'NavBar',
    props: ['notifications'],
    data() {
        return {
            title:'',
            description:'',
            image: {}
        }
    },
    computed: {...mapGetters(['isLoggedIn','getUserData']),
        myProfileLink: function() {
            return '/user/' + this.getUserData.username;
            
        }
    },

    methods: {
        ...mapActions(['uploadArticle','logout']),
        
        onFileChange: function(event) {
            this.image = event.target.files[0];
            
        },
        onPostSubmit: function() {
            const data = {title: this.title, description: this.description, image: this.image };
            console.log(data);
            this.uploadArticle(data);
            
        },

        onLogout() {
            console.log('logout');
            this.logout();
        }
    }
}
</script>

<style scoped>

a.router-link-active {
    color: rgba(0, 0, 0, .9);
    text-decoration: underline;
}



.navbar-default .dropdown-menu.notify-drop {
  min-width: 330px;
  background-color: #fff;
  min-height: 360px;
  max-height: 360px;
}
.navbar-default .dropdown-menu.notify-drop .notify-drop-title {
  border-bottom: 1px solid #e2e2e2;
  padding: 5px 15px 10px 15px;
}
.navbar-default .dropdown-menu.notify-drop .drop-content {
  min-height: 280px;
  max-height: 280px;
  overflow-y: scroll;
}
.navbar-default .dropdown-menu.notify-drop .drop-content::-webkit-scrollbar-track
{
  background-color: #F5F5F5;
}

.navbar-default .dropdown-menu.notify-drop .drop-content::-webkit-scrollbar
{
  width: 8px;
  background-color: #F5F5F5;
}

.navbar-default .dropdown-menu.notify-drop .drop-content::-webkit-scrollbar-thumb
{
  background-color: #ccc;
}
.navbar-default .dropdown-menu.notify-drop .drop-content > li {
  border-bottom: 1px solid #e2e2e2;
  padding: 10px 0px 5px 0px;
}
.navbar-default .dropdown-menu.notify-drop .drop-content > li:nth-child(2n+0) {
  background-color: #fafafa;
}
.navbar-default .dropdown-menu.notify-drop .drop-content > li:after {
  content: "";
  clear: both;
  display: block;
}
.navbar-default .dropdown-menu.notify-drop .drop-content > li:hover {
  background-color: #fcfcfc;
}
.navbar-default .dropdown-menu.notify-drop .drop-content > li:last-child {
  border-bottom: none;
}
.navbar-default .dropdown-menu.notify-drop .drop-content > li .notify-img {
  float: left;
  display: inline-block;
  width: 45px;
  height: 45px;
  margin: 0px 0px 8px 0px;
}
.navbar-default .dropdown-menu.notify-drop .allRead {
  margin-right: 7px;
}
.navbar-default .dropdown-menu.notify-drop .rIcon {
  float: right;
  color: #999;
}
.navbar-default .dropdown-menu.notify-drop .rIcon:hover {
  color: #333;
}
.navbar-default .dropdown-menu.notify-drop .drop-content > li a {
  font-size: 12px;
  font-weight: normal;
}
.navbar-default .dropdown-menu.notify-drop .drop-content > li {
  font-weight: bold;
  font-size: 11px;
}
.navbar-default .dropdown-menu.notify-drop .drop-content > li hr {
  margin: 5px 0;
  width: 70%;
  border-color: #e2e2e2;
}
.navbar-default .dropdown-menu.notify-drop .drop-content .pd-l0 {
  padding-left: 0;
}
.navbar-default .dropdown-menu.notify-drop .drop-content > li p {
  font-size: 11px;
  color: #666;
  font-weight: normal;
  margin: 3px 0;
}
.navbar-default .dropdown-menu.notify-drop .drop-content > li p.time {
  font-size: 10px;
  font-weight: 600;
  top: -6px;
  margin: 8px 0px 0px 0px;
  padding: 0px 3px;
  border: 1px solid #e2e2e2;
  position: relative;
  background-image: linear-gradient(#fff,#f2f2f2);
  display: inline-block;
  border-radius: 2px;
  color: #B97745;
}
.navbar-default .dropdown-menu.notify-drop .drop-content > li p.time:hover {
  background-image: linear-gradient(#fff,#fff);
}
.navbar-default .dropdown-menu.notify-drop .notify-drop-footer {
  border-top: 1px solid #e2e2e2;
  bottom: 0;
  position: relative;
  padding: 8px 15px;
}
.navbar-default .dropdown-menu.notify-drop .notify-drop-footer a {
  color: #777;
  text-decoration: none;
}
.navbar-default .dropdown-menu.notify-drop .notify-drop-footer a:hover {
  color: #333;
}
</style>