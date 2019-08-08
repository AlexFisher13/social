import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div className="col-9 bg-dark3">
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
export default Profile;