import {SET_POST_COMMENTS,SET_SHOW_CARDS,SET_USER_POST,INCREMENT,SET_IS_LOADING} from "../contants"

export const increment = (counter)=>{
    let myValue = counter+1
    return {
        type:INCREMENT,
        payload:myValue
    }
}
export const setIsLoading = ()=>{
    return {
        type:SET_IS_LOADING,
        payload:false
    }
}
export const setShowCards = ()=>{
    return async function(dispatch){
        const Base_Url = "https://jsonplaceholder.typicode.com";
        const Users = "users";
        let response = await fetch(`${Base_Url}/${Users}`);
        let data = await response.json()
        // console.log(data)
        dispatch(
            {
                type:SET_SHOW_CARDS,
                payload:data
            }
        ) 
    }
}
export const setUserPost = (id)=>{
    const Base_Url = "https://jsonplaceholder.typicode.com";
    const UsersPost = `posts?userId=${id}`;
    return async function(dispatch){
        let response = await fetch(`${Base_Url}/${UsersPost}`);
        let data = await response.json()
        dispatch(
            {
                type:SET_USER_POST,
                payload:data
            }
        ) 
    }
}
export const setPostComments = (id)=>{
    const Base_Url = "https://jsonplaceholder.typicode.com";
    const PostComm = `comments?postId=${id}`;
    return async function(dispatch){
        let response = await fetch(`${Base_Url}/${PostComm}`)
        let data = await response.json()
        dispatch(
            {
                type:SET_POST_COMMENTS,
                payload:data
            }
        )
    }
}
   


    
