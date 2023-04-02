import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "18834bd2-c0a1-4861-8b70-0a39eda94260"
    }
})

export const usersAPI = {
    getUsers(usersOnPage: number, currentPage: number ) {
        return instance.get(`users?count=
            ${usersOnPage}&page=${currentPage}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUserStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateUserStatus(status: string) {
        return instance.put(`/profile/status`, {status: status})
            .then(response => response.data)
    },
    getUserProfileInfo(userId: string) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
       return instance.get(`auth/me`)
           .then(response => response)
    }
}