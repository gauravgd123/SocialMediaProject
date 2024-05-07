import {createContext,useReducer} from "react";

export const PostList = createContext({
    postList: [],
    addPost :()=> {},
    deletePost : ()=> {}
});

const postListReducer = (currPostList,action) =>{
    return currPostList;

}
const DEFAULT_POST_LIST = [
    {
    id: "1",
    title : "Going to Uttrakhand",
    body: "Mountains are Calling",
    reactions: 3,
    userId : "user-5",
    tags: ["cold","enjoying","peace"]
},
    {id: "2",
    title : "Going to Himanchal",
    body: "Mountains are Calling",
    reactions: 8,
    userId : "user-9",
    tags: ["cold","enjoying","peace"]
    },
];

const PostListProvider = ({children})=>{

    const [postList,dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST  );

    const addPost = ()=>{

    }

    const deletePost = ()=>{

    }

    return <PostList.Provider value={{
        postList ,
        addPost ,
        deletePost }}>{children}</PostList.Provider>;
} ;
 
export default PostListProvider;