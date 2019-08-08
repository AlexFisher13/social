import React from 'react';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.name;
    return <div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};

const Message = (props) => {
    return <div>
        <p>{props.text}</p>
    </div>
}

const Dialogs = () => {
    return (
        <div className="col-9 bg-dark3">
            <div className="row">
                <div className="col-3 dialogs">
                    <DialogItem name="Conor McGregor"/>
                    <DialogItem name="Henry Sekhydo"/>
                    <DialogItem name="John Johns"/>
                    <DialogItem name="Daniel Kormie"/>
                </div>
                <div className="col-9 messages">
                    <Message text="I'm fine, and you?" />
                    <Message text="Hey how are you?" />
                    <Message text="Hello" />
                </div>
            </div>
        </div>
    )
}
export default Dialogs;