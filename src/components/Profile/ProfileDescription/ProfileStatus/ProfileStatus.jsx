import React, { Component } from 'react';

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    
    componentDidUpdate(prevProps, prevState) {
        const nextProps = this.props
        if (prevProps.status !== nextProps.status) {
            this.setState({
                status: nextProps.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({ editMode: true })
    }

    deactivateEditMode = () => {
        this.setState({ editMode: false })
        this.props.updateUserStatus(this.state.status)
    }

    onChangeStatus = (e) => {
        this.setState({status: e.currentTarget.value})
    }
    
    render() {
        return (
            <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Here can be your status'}</span>
                </div>
            }

            {this.state.editMode &&
                <div>
                    <input onChange={this.onChangeStatus}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}></input>
                </div>
            }
        </div>
        );
    }
}

export default ProfileStatus;