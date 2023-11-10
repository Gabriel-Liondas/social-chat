import React, { useEffect, useState } from 'react'
import "./PostNCommentProfileStyle.css"
import tempProfilePic from "./tempDefaultPic.png"

export default function PostNCommentProfile(props) {
        const [authorName, setAuthorName] = useState(null)


        
        const fetchUser = async () => {
        let headers = new Headers();

            try {
                const userResponse = await fetch(`/users/${props.CommentAuthorId}`,{
                    credentials: 'include',
                    method: 'GET'
                });
                const userData = await userResponse.json();
                setAuthorName(userData.name);
            } catch (error) {
                console.log(error);
            }
        }
        
        useEffect(() => {
            fetchUser()
        }, [])

        return (
            <div id="PostsNCommentProfileMainContainer">
                <img className="authorProfilePic" src={tempProfilePic} alt="profilePicture" />
                <p className='authorName'>{authorName}</p>
            </div>
        );

    
}
