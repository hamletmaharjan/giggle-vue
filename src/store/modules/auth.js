const state = {
    crap:'fuck this',
    access_token: window.localStorage.getItem('access_token')
};

const getters = {
    getAccessToken: state => state.token,

    getData(state){
        return state.crap;
    },

    isLoggedIn(state) {
        if(state.access_token){
            return true;
        }
        else{
            return false
        }
    }
};


const actions = {
    logIn(context,data) {
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