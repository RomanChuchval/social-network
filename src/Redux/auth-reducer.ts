import {Dispatch} from "redux";
import {authAPI} from "../DAL/API";

type ActionsType = SetUserAuthAT


export type AuthStateType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}
const initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {

    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                id: action.payload.data.id,
                login: action.payload.data.login,
                email: action.payload.data.email,
                isAuth: true
            }
    }
    return state
}


type SetUserAuthAT = ReturnType<typeof setUserAuthAC>
const SET_USER_AUTH = 'SET_USER_AUTH'
export const setUserAuthAC = (data: AuthStateType) => {
    return {
        type: SET_USER_AUTH,
        payload: {
            data
        }
    } as const
}

// ================= Thunk creators ================= //


export const setUserAuthTC = () => {

    return (dispatch: Dispatch) => {
        authAPI.authMe()
            .then(data => {
                dispatch(setUserAuthAC(data.data))
            })
    }
}
