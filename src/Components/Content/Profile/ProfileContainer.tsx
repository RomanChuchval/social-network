import React from "react";
import {Profile} from "./Profile";

import {
    addPostAC,
    getUserProfileInfoTC,
    ProfilePageType,
    updateNewPostTextAC,
} from "../../../Redux/profile-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";

export class ProfileContainer extends React.Component<OwnPropsType> {

    componentDidMount() {
        console.log(this.props)
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '28067'
        }
        this.props.getUserProfileInfoTC(userId)
    }

    render() {
        if (!this.props.auth) return <Redirect to={'login'}/>
        return (
            <Profile state={this.props.state}
                     addPostAC={this.props.addPostAC}
                     updateNewPostTextAC={this.props.updateNewPostTextAC}
            />
        )
    }
}

// ============  Containers   ============== //

type OwnPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type PathParamsType = {
    userId: string
}

type ProfilePropsType = mapStatePropsType & mapDispatchPropsType

export type mapStatePropsType = {
    state: ProfilePageType
    auth: boolean
}

export type mapDispatchPropsType = {
    addPostAC: () => void
    updateNewPostTextAC: (postText: string) => void
    getUserProfileInfoTC: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        state: state.profilePage,
        auth: state.userAuth.isAuth
    }
}

let ProfileContainerComponentWithUrlInfo = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    addPostAC,
    getUserProfileInfoTC,
    updateNewPostTextAC,
})(ProfileContainerComponentWithUrlInfo)