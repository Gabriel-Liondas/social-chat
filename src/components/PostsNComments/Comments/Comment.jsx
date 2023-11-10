import React from 'react'
import "./CommentStyle.css"
import MenuButton from "../../Buttons/MenuButton/MenuButton"
import PostNCommentProfile from '../../UserProfile/PostNCommentProfile/PostNCommentProfile';

export default function Comment() {

    return (
        <div id="CommentMainContainer">
            <div className="commentHeader">
                <PostNCommentProfile/>
                <p className="commentDate">24/03/2021</p>
            </div>
            <div className="commentContent">
            Grande alegria viver mais um dia com voces <br></br>
            Aeeeeeeeee
            Festa 🎉
            </div>
        </div>
    );
}
