import { 
    INCREMENT,
    SET_SHOW_CARDS ,
    SET_USER_POST,
    SET_POST_COMMENTS,
    SET_IS_LOADING,
    SET_SHOW_CARDS_DONE,
} from "../contants";

const initailstate = {
    counter:0,
    isLoading:true,
    showCards:[],
    userPosts:[],
    PostComments:[],
}

export default (state = initailstate,action)=> {
    switch (action.type){
        // case INCREMENT:
        //     return {
        //         ...state,
        //         counter: action.payload
        //     };
        case SET_SHOW_CARDS:
            return {
                ...state,
                isLoading:false,
                showCards: action.payload,
            }
        case SET_USER_POST:
             return {
                 ...state,
                 userPosts: action.payload,
                 isLoading:false
             }
        case SET_POST_COMMENTS:
            return {
                ...state,
                PostComments: action.payload,
                isLoading:false
            }
        case SET_IS_LOADING:
            return{
                ...state,
                isLoading:true
            }
        default:
            return state;
    }
}