import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pruducts: []
    },
    getters: {
        availableProducts(state, getters) {
            return state.pruducts.filter(product => product.inventory > 0)
        }
    },
    actions: {
        fetchProduct({commit}) {
            return new Promise((resolve, reject) => {
                shop.getProducts(products => {
                    commit("setProducts", products)
                    resolve()
                })
            })
        }
    },
    mutations: {
        setProducts(state, products) {
            state.pruducts = products
        }
    }
})