import moment from 'moment';

const state = {
    user_data: window.localStorage.getItem('userData'),
    exp: window.localStorage.getItem('expires_at'),
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
        else if(moment(state.exp).isBefore(moment())){
            return false;
        }
        else{
            return true;
        }
    },

    getUserData(state) {
        return JSON.parse(state.user_data);
    }
};


const actions = {
    login(context,data) {
        console.log(data.user_data);
        context.commit('setAccessToken',data.access_token);
        window.localStorage.setItem('access_token',data.access_token);
        context.commit('setUserData',JSON.stringify(data.user_data));
        window.localStorage.setItem('userData',JSON.stringify(data.user_data));
        
    },

    logout(context){
        context.commit('setAccessToken',null);
        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('expires_at');
        
    }


    

};


const mutations = {
    setAccessToken (state, access_token){
        state.access_token = access_token;
    },

    setUserData(state, userData) {
        state.user_data = userData;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}