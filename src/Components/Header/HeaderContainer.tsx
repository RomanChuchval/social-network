import React from 'react'
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthStateType} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";


type HeaderContainerPropsType = MapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

// ========== Container ========== //

export type MapStateToPropsType = {
    authState: AuthStateType
}

// export type MapDispatchToProps = {
//     setUserAuthTC: () => void
// }

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        authState: state.userAuth
    }
}
export default connect(mapStateToProps)(HeaderContainer)