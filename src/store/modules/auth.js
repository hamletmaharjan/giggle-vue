const state = {
    crap:'fuck this',
    access_token: window.localStorage.getItem('access_token')
};

const getters = {
    getAccessToken: state => state.token,

    getData(state){
        return state.crap;
    }
};


const actions = {
    logIn(context,data) {
        console.log(data);
        context.commit('setAccessToken',data.access_token);
        window.localStorage.setItem('access_token',data.access_token);
        
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