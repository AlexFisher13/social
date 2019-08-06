import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className="card mb-3 bg-dark">
                <div className="row no-gutters bg-dark4">
                    <div className="col-md-4">
                        <img src="https://assets.aftership.com/couriers/svg/taiwan-post.svg" className={s.pic} alt=""/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.message}</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;