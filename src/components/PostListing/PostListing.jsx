import React from 'react'
import "./PostListingStyle.css"
import MenuButton from "../Buttons/MenuButton/MenuButton"
import Comment from '../PostsNComments/Comments/Comment';
import Post from '../PostsNComments/Post/Post';

export default function PostListing(props) {

    const propList = props.postList

    const items = this.state.Data.map(item => (
        <div key={item._id}>{renderHTML(`${item.albComEn}`)}</div>
    ))

    return (
        <div 
            id="PostListingMainContainer"
        >
            <Post/>
            <Post/>
        </div>
    );
}
