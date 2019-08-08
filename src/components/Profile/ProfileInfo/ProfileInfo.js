import React from 'react';

const ProfileInfo = () => {
    return <div className="row">
        <div className="col-5">
            <img className="ava" src="https://www.meme-arsenal.com/memes/6c2e852f18490f6f341684ab7e9ad199.jpg" alt=""/>
        </div>
        <div className="col-7 info">
            <p>Name: <b>John Conor</b></p>
            <p>Year: <b>27</b></p>
            <p>Sex: <b>men</b></p>
            <p>Phone: <b>378-378</b></p>
            <p>Email: <b>conor@gmail.com</b></p>
            <p>GitHub: <b>johnconor</b></p>
        </div>
    </div>
};
export default ProfileInfo;