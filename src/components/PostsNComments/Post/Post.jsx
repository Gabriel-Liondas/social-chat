import React from 'react'
import "./PostStyle.css"
import MenuButton from "../../Buttons/MenuButton/MenuButton"
import PostNCommentProfile from '../../UserProfile/PostNCommentProfile/PostNCommentProfile';
import Comment from '../Comments/Comment';

export default function Post() {

    return (
        <div id="PostMainContainer">
            <div className="mainPostContainer">
                <div className="postHeader">
                    <PostNCommentProfile/>
                    <p className="postDate">24/03/2021</p>
                </div>
                <div className="postContent">
                    <p className="postTitle">
                        Estou saindo de São Paulo!
                    </p>
                    <p className="postText">
                        Preciso de dicas de lugares pra visitar em pernambuco <br />
                        Ouvi falar de alguns parques e restaurantes, mas nada muito diferente assim 
                    </p>
                </div>
            </div>
            <div className="commentsContainer">
                <Comment></Comment>
                <Comment></Comment>
            </div>
        </div>
    );
}
