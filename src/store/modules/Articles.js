import api from '../../api/giggle';
import axios from 'axios';

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
    async fetchArticles({ rootState, commit }) {
        const token = rootState.auth.access_token;
        const response = await api.fetchArticles(token);
        console.log(response);
        commit('setArticles',response.data.data);
    },

    async fetchSingleArticle({ rootState, commit }, id) {
        const token = rootState.auth.access_token;
        const response = await api.fetchSingleArticle(token,id);
        //console.log(response);
        commit('setArticle',response.data.data);
    },

    postComment({rootState}, userData) {
        const token = rootState.auth.access_token;
        // const response = await api.postComment(token, articleId, comment);
        console.log(userData.articleId+ ' ' + userData.userComment);
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
            this.logIn(res.data);
            })
            .catch(function (error) {
                console.log(error);
        });
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
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}