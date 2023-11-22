import React from 'react'
import "./PostListingStyle.css"
import MenuButton from "../Buttons/MenuButton/MenuButton"
import { useEffect, useState } from 'react'
import Comment from '../PostsNComments/Comments/Comment';
import Post from '../PostsNComments/Post/Post';

export default function PostListing(props) {
    const [postListData, setPostListData] = useState([])

    const fetchPostList = async () => {
        let headers = new Headers();
            try {
                const userResponse = await fetch(`/posts`,{
                    credentials: 'include',
                    method: 'GET'
                });
                const data = await userResponse.json();
                setPostListData(data)
            } catch (error) {
                console.log(error);
            }
        }

        useEffect(
            () => {
                fetchPostList()
            }
            , [])
    

    return (
        <div 
            id="PostListingMainContainer"
        >

            {postListData.map(function(data) {
                return <Post key={data} postId={data}/>
            })}
        </div>
    );
}
