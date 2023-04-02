import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    userStatus: string
    updateSelfStatusTC: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.userStatus
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
        this.props.updateSelfStatusTC(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState( {
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                        <span onDoubleClick={this.activateEditMode}>{this.props.userStatus || 'double click to edit'}</span>}
                </div>
                <div>
                    {this.state.editMode &&
                        <input value={this.state.status}
                               onChange={this.onStatusChange}
                               autoFocus
                               onBlur={this.deactivateEditMode}
                        />
                    }
                </div>
            </div>
        )
    }
}