import React from 'react';
import { PostItem } from "../PostItem/PostItem"


export const PostList = ({ props }) => {
    return (
        <div>
                   {/* {console.log(posts)} */}
            {props?.map((post) => <PostItem key={props.post.id} post={post} />)}
        </div>
    );
};