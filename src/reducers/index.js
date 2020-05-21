import { combineReducers } from "redux";
import postsReducers from "./postsReducers";
import UsersReducer from "./UsersReducer";

export default combineReducers({
    posts: postsReducers,
    users: UsersReducer
});