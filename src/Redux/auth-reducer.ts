import {Dispatch} from "redux";
import {authAPI} from "../DAL/API";

type ActionsType = SetUserAuthAT | LoginUserAT | LogoutUserAT


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
        case LOGIN_USER:
            return {
                ...state,
                isAuth: true
            }
        case LOGOUT_USER:
            return {
                ...state,
                isAuth: false
            }
    }
    return state
}


type SetUserAuthAT = ReturnType<typeof setUserAuthAC>
type LoginUserAT = ReturnType<typeof loginUserAC>
type LogoutUserAT = ReturnType<typeof logoutUserAC>

const SET_USER_AUTH = 'SET_USER_AUTH'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export const setUserAuthAC = (data: AuthStateType) => {
    return {
        type: SET_USER_AUTH,
        payload: {
            data
        }
    } as const
}

export const loginUserAC = () => {
    return {
        type: LOGIN_USER
    } as const
}

export const logoutUserAC = () => {
    return {
        type: LOGOUT_USER
    } as const
}

// ================= Thunk creators ================= //


export const setUserAuthTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0)
                    dispatch(setUserAuthAC(response.data.data))
            })
    }
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        authAPI.authLogin(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0)
                    dispatch(loginUserAC())
            })
    }
}

// qwerqaz

export const logoutUserTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.authLogOut()
            .then( () => dispatch(logoutUserAC()))
    }
}

