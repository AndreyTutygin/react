import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2af6cc9f-29f5-4b64-a346-97ec15e7daa8'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data; });
    }
}

export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => { return response.data; });
    },

    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => { return response.data; });
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
            .then(response => { return response.data; });
    },

    getId(id) {
        return instance.get(`profile/${id}`)
            .then(response => { return response.data; });
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
            .then(response => { return response.data; });
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(response => { return response.data; });
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => { return response.data; });
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => { return response.data; });
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status })
            .then(response => { return response.data; });
    }
}