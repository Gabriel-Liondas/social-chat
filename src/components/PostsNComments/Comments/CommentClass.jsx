import React from 'react'

export default class CommentClass {
    constructor(authorId, date, text) {
        this.state = {
            authorId : authorId ? authorId : null,
            date : date ? date : null,
            text : text ? text : null
        }
    }
}