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
        commit('setArticles',response.data.data);
    },

    async fetchSingleArticle({ rootState, commit }, id) {
        const token = rootState.auth.access_token;
        const response = await api.fetchSingleArticle(token,id);
        //console.log(response);
        commit('setArticle',response.data.data);
    },

    async fetchUsersArticles({rootState, commit}, userId){
        
        const token = rootState.auth.access_token;
        const response = await api.fetchUsersArticles(token,userId);
        console.log(response);
        commit('setArticle', response.data.data);
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
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}