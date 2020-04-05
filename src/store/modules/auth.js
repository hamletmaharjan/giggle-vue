const state = {
    crap:'fuck this',
    access_token: window.localStorage.getItem('access_token')
};

const getters = {
    getAccessToken(state) {
        return state.access_token;
    },
    getData(state){
        return state.crap;
    },

    isLoggedIn(state) {
        if((state.access_token == "null") || (state.access_token == null)){
            return false;
        }
        else{
            return true;
        }
    }
};


const actions = {
    login(context,data) {
        console.log(data);
        context.commit('setAccessToken',data.access_token);
        window.localStorage.setItem('access_token',data.access_token);
        
    },

    logout(context){
        context.commit('setAccessToken',null);
        window.localStorage.removeItem('access_token');
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