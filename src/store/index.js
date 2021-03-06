import Vue from 'vue'
import Vuex from 'vuex'
import articles from './modules/articles.js';
import auth from './modules/auth.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    articles
  }
})
