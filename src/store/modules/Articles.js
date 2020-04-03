import api from '../../api/giggle';

const state = {
    articles: []
};

const getters = {
    allArticles: state => state.articles
};


const actions = {
    async fetchArticles({ rootState, commit }) {
        const token = rootState.auth.access_token;
        const response = await api.fetchArticles(token);
        console.log(response);
        commit('setArticles',response.data.data);

    }
};


const mutations = {
    setArticles(state, articles){
        state.articles = articles;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}