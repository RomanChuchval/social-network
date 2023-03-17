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
    }
}

export const followAPI = {
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
        },

        unfollowUser(userId: number) {
            return instance.delete(`follow/${userId}`)
                .then(response => response.data)
        }
    }
