import React from "react";
const ActionButton = ({actionName, onAction, icon}) => {

    return (

        <button className={actionName} onClick={onAction} id={actionName}> <i className={icon}></i> </button>
    )
}

export default ActionButton;