import {defineStore} from "pinia";
import errorHandler from "../services/products.js";

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
        /**
         * Retrieves the products from the API.
         *
         * @return {Promise<void>} A promise that resolves when the products have been retrieved.
         */
        async getProducts() {
            const response = await axios.get('/api/products');
            this.products = response.data.data;
        },

        /**
         * Retrieves a product from the API based on the given ID.
         *
         * @param {number} id - The ID of the product to retrieve.
         * @return {Promise} A Promise that resolves with the retrieved product data.
         */
        async getProduct(id) {
            const response = await axios.get(`/api/products/${id}`);
            this.product = response.data;
        },

        /**
         * Stores a product by making a POST request to the '/api/products/store' endpoint.
         *
         * @param {Object} data - The data of the product to be stored.
         * @return {Promise} A promise that resolves when the request is successful, and rejects when there is an error.
         */
        async storeProduct(data) {
            await axios.post('/api/products/store', data)
                .then(() => {
                    this.successRequest()
                })
                .catch((error) => {
                    this.errorsValidation = errorHandler(error)
                })
        },

        /**
         * Updates a product using the provided data.
         *
         * @param {object} data - The data to update the product with.
         * @return {Promise<void>} A promise that resolves when the product is updated.
         */
        async updateProduct(data) {
            await axios.patch(`/api/products/${this.product.id}/update`, data)
                .then(() => {
                    this.successRequest()
                })
                .catch((error) => {
                    this.errorsValidation = errorHandler(error)
                })
        },

        /**
         * Deletes a product with the given ID.
         *
         * @param {string} id - The ID of the product to be deleted.
         * @return {Promise} A Promise that resolves when the product is successfully deleted.
         */
        async deleteProduct(id) {
            await axios.delete(`/api/products/${id}`)
                .then(() => {
                    this.getProducts()
                })
                .catch((error) => {
                    console.error(`Error deleting product with ID ${id}:`, error)
                })
        },

        async successRequest() {
            this.errorsValidation = {}
            await this.getProducts()
        },
    }
})
