import React from "react";

type ProfileStatusType = {
    profileInfo: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                        <span onClick={this.activateEditMode}>Status</span>}

                </div>
                <div>
                    {this.state.editMode &&
                        <input value={this.props.profileInfo}
                               type={'text'}
                               autoFocus
                               onBlur={this.deactivateEditMode}
                        />
                    }
                </div>
            </div>
        )
    }
}