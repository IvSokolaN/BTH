import {defineStore} from "pinia";
import axios from "axios";
import router from "../router/index.js";

export const useUserStore = defineStore('users', {
    state: () => ({
        user: {},
    }),
    getters: {
        isVisibleInputArticle: (state) => {
            return state.user.role === 'admin';
        }
    },
    actions: {
        async login(email, password) {
            const data = {
                email,
                password
            }
            await axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.post('/api/login', data)
                        .then(() => {
                            router.push({name: 'home'});
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                });
        },

        async getUser() {
            await axios.get('/sanctum/csrf-cookie')
                .then(() => {
                    axios.get(`/api/users/user`)
                        .then((resp) => {
                            this.user = resp.data.data
                        })
                        .catch((error) => {
                            console.log(error.response.data);
                        });
                });
        }
    }
})