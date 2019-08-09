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
};

const Dialogs = (props) => {
    return (
        <div className="col-9 bg-dark3">
            <div className="row">
                <div className="col-3 dialogs">
                    {
                        props.dialogBase.map((el) =>
                            <DialogItem name={el.name}/>
                        )}
                </div>
                <div className="col-9 messages">
                    {
                        props.messageBase.map((el) =>
                            <Message text={el.text}/>
                        )}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;