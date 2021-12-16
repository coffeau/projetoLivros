

export const auth = {
    namespaced: true,
    state: () => ({
        loggedIn: false,
        user: {},
    }),
    mutations:{
        setLoginInfo(state, user){
            state.user = user
            state.loggedIn = true

        },
        setLogout(state){
            state.user = {}
            state.loggedIn = false
        }
    },
    actions: {
        async login( {commit}, user){
            commit('setloginInfo', user)
                
            },
        logout({commit}){
            commit('setLogout')
        }
    }
}