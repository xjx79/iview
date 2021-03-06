import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import articles from './modules/articles'
import categories from './modules/categories'
import settings from './modules/settings'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'zh-CN'
  },
  getters,
  actions,
  mutations,
  modules: {
    articles,
    categories,
    settings
  }
})
