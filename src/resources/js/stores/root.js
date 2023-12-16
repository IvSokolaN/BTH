import {defineStore} from "pinia";

export const useProductStore = defineStore('root', {
    state: () => ({
        product: {},
        products: [],
        status: {
            available: 'Доступен',
            unavailable: 'Недоступен'
        },
        errorsValidation: {},
    }),
    actions: {
        async getProducts() {
            const response = await axios.get('/api/products')
            this.products = response.data.data
        },

        async getProduct(id) {
            const response = await axios.get(`/api/products/${id}`)
            this.product = response.data
        },

        async storeProduct(data) {
            await axios.post('/api/products/store', data)
                .then(() => {
                    this.errorsValidation = {}
                    this.getProducts()
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        this.errorsValidation = error.response.data.errors
                    } else {
                        console.error(`Error storing product:`, error)
                    }
                })
        },

        async editProduct(article, title, status, attributes) {
            const productData = {
                article,
                title,
                status,
                data: attributes
            }

            await axios.patch(`/api/products/${this.product.id}/edit`, productData)
                .then(() => {
                    this.getProducts()
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        console.log(`Error validation`, error.response.data.errors);
                    } else {
                        console.error(`Error storing product:`, error)
                    }
                })
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
