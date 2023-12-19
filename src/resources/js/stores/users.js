import {defineStore} from "pinia";
import axios from "axios";

export const useUserStore = defineStore('users', {
    state: () => ({
        user: {},
    }),
    actions: {
        async login(email, password) {
            await axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/login', email, password)
                        .then((response) => {
                            console.log(response);
                        });
                });
        },
        async getUser(id) {
            const response = await axios.get(`/api/users/${id}`);
            this.user = response.data.data;
        },
    }
})