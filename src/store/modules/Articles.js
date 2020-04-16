import api from '../../api/giggle';
import axios from 'axios';
import router from '../../router/index.js';

const state = {
    articles: [],
    article:{},
    comments:[]
};

const getters = {
    getArticles: state => state.articles,
    getArticle: function(state){
        return state.article
    },
    getComments: function(state) {
        return state.comments
    } 
};


const actions = {
    async fetchArticles({ rootState, commit }, type) {
        const token = rootState.auth.access_token;
        const response = await api.fetchArticles(token, type);
        commit('setArticles',response.data.data);
    },

    async fetchMoreArticles({ rootState, commit }, data) {
        const token = rootState.auth.access_token;
        const response = await api.fetchMoreArticles(token, data.page, data.type);
        commit('addMoreToArticles', response.data.data);
    },

    async fetchSingleArticle({ rootState, commit }, id) {
        const token = rootState.auth.access_token;
        const response = await api.fetchSingleArticle(token,id);
        //console.log(response);
        commit('setArticle',response.data.data);
    },

    async deleteArticle({rootState}, id) {
        const token = rootState.auth.access_token;
        const response = await api.deleteArticle(token, id);
        console.log(response);
        router.go();

    },

    async deleteComment({rootState}, id) {
        const token = rootState.auth.access_token;
        const response = await api.deleteComment(token, id);
        console.log(response);
    },
    async fetchUsersArticles({rootState, commit}, userId){
        
        const token = rootState.auth.access_token;
        const response = await api.fetchUsersArticles(token,userId);
        console.log(response);
        commit('setArticles', response.data.data);
    },

    postComment({rootState,dispatch}, userData) {
        const token = rootState.auth.access_token;
        // const response = await api.postComment(token, articleId, comment);
        const ROOT_URL = 'http://localhost:8000/api';
        const url = `${ROOT_URL}/articles/${userData.articleId}/comments`;
        const formData = new FormData();
        formData.append('comment',userData.userComment);

        axios.post(url,formData,
            {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then( (res) => {
            console.log(res);
            dispatch('fetchSingleArticle', userData.articleId);
            })
            .catch(function (error) {
                console.log(error);
        });
        
    },

    async uploadArticle({rootState}, articleData) {
        console.log(articleData);
        const token = rootState.auth.access_token;
        const ROOT_URL = 'http://localhost:8000/api';
        const url = `${ROOT_URL}/articles`;
        const formData = new FormData();
        formData.append('title', articleData.title);
        formData.append('description', articleData.description);
        formData.append('image', articleData.image, articleData.image.name);

        const res = await axios.post(url,formData,
            {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(res);
    }

};


const mutations = {
    setArticles(state, articles){
        state.articles = articles;
    },
    setArticle(state, article){
        state.article = article;
    },

    setComments(state, comments) {
        state.comments = comments;
    },

    addMoreToArticles(state, articles) {
        state.articles = state.articles.concat(articles);
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}