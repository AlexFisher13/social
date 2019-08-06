import React from 'react';
import MyPost from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className="col-9 bg-dark3">
            <img className="ava" src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt=""/>
            <MyPost/>
        </div>
    )
}
export default Profile;