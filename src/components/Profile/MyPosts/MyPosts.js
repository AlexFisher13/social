import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return <div className="col-12">
        <form>
            <input type="text"/>
            <button>Добавить пост</button>
        </form>
        {
            props.posts.map(el =>
            <Post message={el.message} />)
        }
    </div>
};
export default MyPosts;