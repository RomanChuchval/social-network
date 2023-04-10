import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import ThunkMiddleware, {ThunkAction} from "redux-thunk";

export const RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    userAuth: authReducer
});

export const store = createStore(RootReducer, applyMiddleware(ThunkMiddleware))

export type AppStateType = ReturnType<typeof RootReducer>
export type AppThunkType<ReturnType = void> =  ThunkAction<void, AppStateType, unknown, AnyAction>







declare global {
    interface Window {
        store: any
    }
}

window.store = store
