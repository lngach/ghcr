import Vue from 'vue'
import Vuex from 'vuex'
import AIComparation from './modules/ai-comparation'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AIComparation,
  },
})
