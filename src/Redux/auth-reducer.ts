import {Dispatch} from "redux";
import {authAPI} from "../DAL/API";
import {AppThunkType} from "./redux-store";

type ActionsType = SetUserAuthAT | LogoutUserAT | InitializationAppAT


export type AuthStateType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
    initialized: boolean
}
const initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    initialized: false
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
        case LOGOUT_USER:
            return {
                ...state,
                isAuth: false
            }
        case INITIALIZATION:
            return {
                ...state,
                initialized: action.payload.status
            }
    }
    return state
}


type SetUserAuthAT = ReturnType<typeof setUserAuthAC>
type LogoutUserAT = ReturnType<typeof logoutUserAC>
type InitializationAppAT = ReturnType<typeof setAppInitializationAC>

const SET_USER_AUTH = 'SET_USER_AUTH'
const LOGOUT_USER = 'LOGOUT_USER'
const INITIALIZATION = 'INITIALIZATION'

export const setUserAuthAC = (data: AuthStateType) => {
    return {
        type: SET_USER_AUTH,
        payload: {
            data
        }
    } as const
}

export const logoutUserAC = () => {
    return {
        type: LOGOUT_USER
    } as const
}

export const setAppInitializationAC = (status: boolean) => (
    {
        type: INITIALIZATION,
        payload: {status}
    } as const
)

// ================= Thunk creators ================= //

export const setUserAuthTC = () => async (dispatch: Dispatch) => {
    // dispatch(setAppInitializationAC(true))
    const authMeData = await authAPI.authMe()
    if (authMeData.data.resultCode === 0) {
        dispatch(setUserAuthAC(authMeData.data.data))
    }
        dispatch(setAppInitializationAC(true))
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean): AppThunkType => {
    return (dispatch) => {
        authAPI.authLogin(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0)
                    dispatch(setUserAuthTC())
            })
    }
}
export const logoutUserTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.authLogOut()
            .then(() => dispatch(logoutUserAC()))
    }
}

