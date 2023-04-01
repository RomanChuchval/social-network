import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {addPostAC, getUserProfileInfoTC, ProfilePageType, updateNewPostTextAC,} from "../../../Redux/profile-reducer";
import {AppStateType} from "../../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../Hoc/withAuthRedirect";
import {compose} from "redux";

export class ProfileContainer extends React.Component<OwnPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '28067'
        }
        this.props.getUserProfileInfoTC(userId)
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

// ============  Containers   ============== //

type OwnPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type PathParamsType = {
    userId: string
}

type ProfilePropsType = MapStatePropsType & mapDispatchPropsType

export type MapStatePropsType = {
    state: ProfilePageType
}

export type mapDispatchPropsType = {
    addPostAC: () => void
    updateNewPostTextAC: (postText: string) => void
    getUserProfileInfoTC: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.profilePage
    }
}


export default compose<ComponentType>(
    connect(mapStateToProps, {addPostAC, getUserProfileInfoTC, updateNewPostTextAC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
