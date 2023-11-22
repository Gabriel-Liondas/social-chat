import React, { useEffect, useState } from 'react'
import "./PostStyle.css"
import moment from 'moment';
import PostNCommentProfile from '../../UserProfile/PostNCommentProfile/PostNCommentProfile';
import Comment from '../Comments/Comment';
import PostClass from './PostClass';

export default function Post(props) {
    const [postData, setPostData] = useState(new PostClass)
    var commentPosit = 0

    const fetchPost = async () => {
        let headers = new Headers();
            try {
                const userResponse = await fetch(`/posts/${props.postId}`,{
                    credentials: 'include',
                    method: 'GET'
                });
                const data = await userResponse.json();
                const currentDate = moment(data.date).format('DD/MM/YYYY')
                const newPost = new PostClass(
                    data.id,
                    data.author.id,
                    data.comments,
                    currentDate,
                    data.title,
                    data.body
                )
                setPostData(newPost)
            } catch (error) {
                console.log(error);
            }
        }

        
        
        useEffect(
        () => {
            fetchPost()

        //     if (postData.state.commentList != null){

        //         postData.state.commentList.map(comment => (
        //             return <Comment commentData={toString(comment)}/>
        //         ))
        // }
        }
        , [postData.state.commentList])

    return (
        <div className="PostMainContainer">
            <div className="mainPostContainer">
                <div className="postHeader">
                    <PostNCommentProfile authorId={postData.state.authorId}/>
                    <p className="postDate">{postData.state.date}</p>
                </div>
                <div className="postContent">
                    <p className="postTitle">
                        {postData.state.title}
                    </p>
                    <p className="postText">
                        {postData.state.content}
                    </p>
                </div>
            </div>
            <div className="commentsContainer">
                {postData.state.commentList.map(function(data) {
                    commentPosit += 1
                    return <Comment key={`${props.postId}`+`${commentPosit}`} authorId={data.author.id} date={moment(data.date).format('DD/MM/YYYY')} text={data.text}/>
                })}
            </div>
        </div>
    );
}
