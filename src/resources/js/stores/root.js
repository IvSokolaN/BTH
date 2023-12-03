import {defineStore} from "pinia";

export const useRootStore = defineStore('root', {
    state: () => ({
        products: []
    }),
    actions: {
        async getProducts() {
            const data = await axios.get('/api/products')
            this.products = data.data
        }
    }
})
