const state = {
    access_token: window.localStorage.getItem('access_token')
};

const getters = {
    getAccessToken: state => state.token
};


const actions = {
    login({commit},data) {
        console.log(data);
        commit('setAccessToken',data);
        window.localStorage.setItem('access_token',data);
        
    }
};


const mutations = {
    setAccessToken (state, access_token){
        state.access_token = access_token;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}