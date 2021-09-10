import React from 'react';


export const PostItem = (props) => {
    return (
        <div>
            {console.log(props)}
            <h5>userId: {props.post.userId}</h5>
            <h5>id: {props.post.id}</h5>
            <h4>{props.post.title}</h4>
            <p>{props.post.body}</p>

        </div>
    );
};