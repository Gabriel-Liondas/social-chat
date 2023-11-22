import React, { useEffect, useState } from 'react'
import "./CommentStyle.css"
import MenuButton from "../../Buttons/MenuButton/MenuButton"
import PostNCommentProfile from '../../UserProfile/PostNCommentProfile/PostNCommentProfile';
import CommentClass from './CommentClass';

export default function Comment(props) {
    const [authorId, setauthorID] = useState("")

    useEffect(
        () => {
            setauthorID(props.authorId)
        }
        , [props.authorId])

    return (
        <div className="CommentMainContainer">
            <div className="commentHeader">
                <PostNCommentProfile authorId={`${authorId}`}/>
                <p className="commentDate">{props.date}</p>
            </div>
            <div className="commentContent">
                {props.text}
            </div>
        </div>
    );
}
