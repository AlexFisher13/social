import React from 'react';

const Post = (props) => {
    return (
        <div>
            <div className="mb-3 bg-dark">
                <div className="row no-gutters bg-dark4">
                    <div className="col-md-4">
                        <img src="https://www.meme-arsenal.com/memes/6c2e852f18490f6f341684ab7e9ad199.jpg" className="post-ava" alt=""/>
                    </div>
                    <div className="col-md-8">
                        <div>
                            <h5>{props.message}</h5>
                            <p><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;