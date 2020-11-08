import React, { useState,useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
       setStatus(props.status) 
    },[props.status])

    const onActivateEditMode =()=> setEditMode(true)
    const onDeactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    
    const onChangeStatus = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={onActivateEditMode}>{status || 'Here can be your status'}</span>
                </div>
            }

            {editMode &&
                <div>
                <input onChange={onChangeStatus} autoFocus={true} onBlur={onDeactivateEditMode} value={status}></input>
                </div>
            }
        </div>
        );  
    
}

export default ProfileStatusWithHooks 
