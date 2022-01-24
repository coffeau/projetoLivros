import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import { auth } from './auth/index.js'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    key: 'projeto-integrador-livros'
})

const modules = {
    auth
}

export default new Vuex.Store({
    modules,
    plugins: [vuexLocal.plugin]
})