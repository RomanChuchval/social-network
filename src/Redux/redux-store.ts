import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

export const RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    userAuth: authReducer
});



export type AppStateType = ReturnType<typeof RootReducer>
export const store = createStore(RootReducer)


declare global {
    interface Window {
        store: any
    }
}

window.store = store
