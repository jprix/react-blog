import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash'

//defines a function that returns a function

export const fetchPostsAndUsers = () => async (dispatch, getState) => {

    await dispatch(fetchPosts());

    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));

};

export const fetchPosts = () => async dispatch => {

        const response = await jsonPlaceholder.get('/posts');

       //updates reducers
        dispatch({ type: 'FETCH_POSTS', payload: response.data })

    };


export const fetchUser = (id) => async dispatch => {

    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data})

};


