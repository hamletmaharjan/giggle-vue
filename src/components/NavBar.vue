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
                    <router-link class="nav-link" to="/">Hottest</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="">Most Viewed</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="">Newest</router-link>
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
                    <li class="nav-item">
                        <router-link class="nav-link" to="">Notifications</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to=""><img alt="Vue logo" src="../assets/lady.png" height="30px" width="30px"></router-link>
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
                                            <input type="file" accept="image/*"> <br>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label>Title</label>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label>Description</label>
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="row">
                                         <button>Submit</button> 
                                    </div>
                                    
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    
                </ul>

                <a v-else class="nav-link">Login</a>
            </div>
        </nav>
    </div>
</template>


<script>

import { mapGetters } from 'vuex';
export default {
    name: 'NavBar',

    computed: mapGetters(['isLoggedIn'])
}
</script>