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
            const response = await axios.get(`/api/products/${id}`);
            this.product = response.data;
        },

        async storeProduct(article, title, status, attributes) {
            const productData = {
                article,
                title,
                status,
                data: attributes
            }

            try {
                await axios.post('/api/products/store', productData)
                await this.getProducts()
            } catch (error) {
                console.error(`Error storing product:`, error)
            }
        },

        async editProduct(article, title, status, attributes) {
            const productData = {
                article,
                title,
                status,
                data: attributes
            }

            try {
                await axios.post('/api/products/store', productData)
                await this.getProducts()
            } catch (error) {
                console.error(`Error storing product:`, error)
            }
        },

        async deleteProduct(id) {
            try {
                await axios.delete(`/api/products/${id}`)
                await this.getProducts()
            } catch (error) {
                console.error(`Error deleting product with ID ${id}:`, error)
            }
        }
    }
})
