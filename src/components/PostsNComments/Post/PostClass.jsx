import React from 'react'

export default class PostClass {
    constructor(postID, authorId, comments, date, title, content) {
        this.state = {
            postID : postID ? postID : null,
            authorId : authorId ? authorId : null,
            commentList  : comments ? comments : [],
            date : date ? date : null,
            title : title ? title : null,
            content : content ? content : null
        }
    }
}