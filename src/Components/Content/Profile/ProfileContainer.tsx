import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {addPostAC, ProfilePageType, setUserProfileInfoAC, updateNewPostTextAC, UserProfileInfoType} from "../../../Redux/profile-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";

export class ProfileContainer extends React.Component<OwnPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfileInfoAC(response.data)
            })
    }

    render() {
        return (
            <Profile state={this.props.state}
                     addPostAC={this.props.addPostAC}
                     updateNewPostTextAC={this.props.updateNewPostTextAC}
            />
        )
    }
}

// ============           Containers             ============== //

type OwnPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type PathParamsType = {
    userId: string
}

type ProfilePropsType = mapStatePropsType & mapDispatchPropsType

export type mapStatePropsType = {
    state: ProfilePageType
}

export type mapDispatchPropsType = {
    addPostAC: () => void
    updateNewPostTextAC: (postText: string) => void
    setUserProfileInfoAC: (profileInfo: UserProfileInfoType) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        state: state.profilePage
    }
}

let ProfileContainerComponentWithUrlInfo = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    addPostAC,
    setUserProfileInfoAC,
    updateNewPostTextAC,
})(ProfileContainerComponentWithUrlInfo)