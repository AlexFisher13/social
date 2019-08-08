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

let dialogBase = [
    {name: "Conor McGregor"},
    {name: "Henry Sekhydo"},
    {name: "John Johns"},
    {name: "Daniel Kormie"}
];

let messageBase = [
    {text: "I'm fine, and you?"},
    {text: "Hey how are you?"},
    {text: "Hello"}
];

const Dialogs = () => {
    return (
        <div className="col-9 bg-dark3">
            <div className="row">
                <div className="col-3 dialogs">
                    {
                        dialogBase.map((el) =>
                            <DialogItem name={el.name}/>
                        )}
                </div>
                <div className="col-9 messages">
                    {
                        messageBase.map((el) =>
                            <Message text={el.text}/>
                        )}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;