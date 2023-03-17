import React from 'react'
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthStateType, setUserAuthAC} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import axios from "axios";
import {authAPI} from "../../DAL/API";

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        authAPI.authMe()
            .then(data => {
                this.props.setUserAuthAC(data.data)
            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

export type MapStateToPropsType = {
    authState: AuthStateType
}

export type MapDispatchToProps = {
    setUserAuthAC: (data: AuthStateType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        authState: state.userAuth
    }
}
export default connect(mapStateToProps, {setUserAuthAC})(HeaderContainer)