import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div className="col-12">
        <form>
            <input type="text"/>
            <button>Добавить пост</button>
        </form>
        <Post message='Hello'/>
        <Post message='Yahooo'/>
        <Post message='My First Post'/>
    </div>
}
export default MyPosts;