import axios from "axios";


export const Instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "18834bd2-c0a1-4861-8b70-0a39eda94260"
    }
})

export const usersAPI = {
    getUsers(usersOnPage: number, currentPage: number ) {
        return Instance.get(`users?count=
            ${usersOnPage}&page=${currentPage}`)
            .then(response => response.data)
    },
    getUserProfileInfo(userId: string) {
        return Instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return Instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unfollowUser(userId: number) {
        return Instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
       return Instance.get(`auth/me`)
           .then(response => response.data)
    }
}