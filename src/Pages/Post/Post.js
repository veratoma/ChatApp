import React, { useEffect } from 'react';
import { PostList } from "../../components/PostList/PostList";
import { useRequestApi } from "../../hooks/useRequestApi";
import { ENDPOINT, ENDPOINTS } from '../../api/endpoints';

import {useDispatch, useSelector } from "react-redux";

import { useParams } from 'react-router';
import { getPostsAction} from '../../Store/post/actions';
import {postsSelectors}  from '../../Store/post/selectors'

export const Post = (props) => {
    // const {posts} = useParams();
   // console.log(posts)

  const posts = useSelector(postsSelectors.getPosts)
//   const error = useSelector(postsSelectors.getPostsError)
//   const isLoading = useSelector(postsSelectors.getPostsLoading)
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getPostsAction(posts));
  },[])
//     /**
//       * @desc формируем строку API которое хотим вызвать
//       * */
//     const url = useMemo(() => [
//         ENDPOINT,
//         ENDPOINTS.posts
//     ].join(''), []);

//     /**
//      * @desc более приятный и удобный способ работы с API
//      * решает проблему дублирования кода
//      * */
//     const [postApi, getPosts] = useRequestApi({
//         url,
//         isAutoLoad: true,
//     })


//     return (
//         <div>
//             <h1>posts</h1>
//             <button onClick={getPosts}>reload</button>

//             {
//                 postApi.isLoading && <div>isLoading: {postApi.isLoading}</div>
//             }
//             {
//                 postApi.error && <div>
//                     error: {postApi.error.toString()}
//                 </div>
//             }
//             {
//                 postApi.data &&
//                 <PostList posts={postApi.data} />
//             }
//         </div>
//     );
// };

return (
    <div>
      <h1>posts</h1>
      post: {posts}

{
  console.log(posts)}
      {/* {
        isLoading && <div>
          isLoading: {isLoading.toString()}
        </div>
      }

      {
        error && <div>
          error: {error.toString()}
        </div>
      } */}
      {
        posts &&
        <PostList posts={posts}/>
      }
    </div>
  );
};