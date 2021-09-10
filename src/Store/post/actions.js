// import {ENDPOINT, ENDPOINTS} from "../../api";


// export const CHANGE_COMMENTS_LOADING = 'CHANGE_COMMENTS_LOADING';

// export const CHANGE_COMMENTS_ERROR = 'CHANGE_COMMENTS_ERROR';

// export const CHANGE_COMMENTS_DATA = 'CHANGE_COMMENTS_DATA';


// export const changeCommentsLoading = (isLoading) => ({
//   type: CHANGE_COMMENTS_LOADING,
//   payload:isLoading,
// })

// export const changeCommentsError = (error) => ({
//   type: CHANGE_COMMENTS_ERROR,
//   payload: error
// })

// export const changeCommentsData = (comments) => ({
//   type: CHANGE_COMMENTS_DATA,
//   payload: comments
// })


// export const getCommentsAction = (postId) => async (dispatch) => {

//   dispatch(changeCommentsData(null))
//   dispatch(changeCommentsError(null))
//   dispatch(changeCommentsLoading(true))

//   try {
//     const url = [
//       ENDPOINT,
//       ENDPOINTS.comments.replace(
//         ':postId',
//         postId
//       )
//     ].join('');

//     const response = await fetch(url);

//     const result = await response.json();

//     dispatch(changeCommentsData(result))

//   } catch (e) {
//     console.dir(e);
//     dispatch(changeCommentsError(e))
//   }

//   dispatch(changeCommentsLoading(false))
// }


import {ENDPOINT, ENDPOINTS} from "../../api/endpoints";


export const CHANGE_POST_LOADING = 'CHANGE_POST_LOADING';

export const CHANGE_POST_ERROR = 'CHANGE_POST_ERROR';

export const CHANGE_POST_DATA = 'CHANGE_POST_DATA';


export const changePostsLoading = (isLoading) => ({
  type: CHANGE_POST_LOADING,
  payload:isLoading,
})

export const changePostsError = (error) => ({
  type: CHANGE_POST_ERROR,
  payload: error
})

export const changePostsData = (posts) => ({
  type: CHANGE_POST_DATA,
  payload: posts
})


export const getPostsAction = (posts) => async (dispatch) => {

  dispatch(changePostsData([]))
  dispatch(changePostsError(null))
  dispatch(changePostsLoading(true))

  try {
    const url = [
      ENDPOINT,
      ENDPOINTS.posts,
    ].join('');

    console.log(url)
    
    const response = await fetch(url);
   

    const result = await response.json();
    console.log(result)

    dispatch(changePostsData(result))

  } catch (e) {
    console.dir(e);
    dispatch(changePostsError(e))
  }

  dispatch(changePostsLoading(false))
}
