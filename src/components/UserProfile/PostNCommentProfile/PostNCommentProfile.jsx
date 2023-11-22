import React, { useEffect, useState } from 'react'
import "./PostNCommentProfileStyle.css"
import tempProfilePic from "./tempDefaultPic.png"

export default function PostNCommentProfile(props) {
        const [authorName, setAuthorName] = useState(null)


        
        const fetchUser = async (authorId) => {
        let headers = new Headers();
            try {
                const userResponse = await fetch(`/users/${authorId}`,{
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

            if (props.authorId) {
                fetchUser(props.authorId)
            }
        }, [props.authorId])

        return (
            <div id="PostsNCommentProfileMainContainer">
                <img className="authorProfilePic" src={tempProfilePic} alt="profilePicture" />
                <p className='authorName'>{authorName}</p>
            </div>
        );

    
}
