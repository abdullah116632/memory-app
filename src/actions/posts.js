import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionType";
import * as api from "../api";

// action creator

export const getPosts = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err);
  }
}

export const createPost = (postData) => async (dispatch) => {
  try{
    const {data} = await api.createPost(postData);

    dispatch({type: CREATE, payload: data});
  }catch(err){
    console.log(err);
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try{
    const {data} = await api.updatePost(id, post);
    dispatch({type: UPDATE, payload: data});
  }catch(err){
    console.log(err);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try{
    await api.deletePost(id);

    dispatch({type: DELETE, payload: id});
  }catch(err){
    console.log(err);
  }
}

export const likePost = (id) => async (dispatch) => {
  try{
    const {data} = await api.likePost(id);
    dispatch({type: UPDATE, payload: data});
  }catch(err){
    console.log(err);
  }
}
