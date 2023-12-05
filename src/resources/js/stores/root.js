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
            this.product = data.data
        },

        async deleteProduct(id) {
            await axios.delete(`/api/products/${id}`)
                .then(res => {
                    this.getProducts()
                })
        }
    }
})
