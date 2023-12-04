import {defineStore} from "pinia";

export const useProductStore = defineStore('root', {
    state: () => ({
        products: [],
        product: {}
    }),
    actions: {
        async getProducts() {
            const data = await axios.get('/api/products')
            this.products = data.data
        },

        async getProduct(id) {
            const data = await axios.get(`/api/products/${id}`)
            console.log('pinia: ',data.data);
            this.product = data.data
        }
    }
})
