import api from '../../api/giggle';

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