import mongoose from "mongoose"
import {Comment} from "../../4-video-tube/src/models/comment.model.js"
import {ApiError} from "../../4-video-tube/src/utils/ApiError.js"
import {ApiResponse} from "../../4-video-tube/src/utils/ApiResponse.js"
import {asyncHandler} from "../../4-video-tube/src/utils/asyncHandler.js"

const getVideoComments = asyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const {videoId} = req.params
    const {page = 1, limit = 10} = req.query

})

const addComment = asyncHandler(async (req, res) => {
    // TODO: add a comment to a video
})

const updateComment = asyncHandler(async (req, res) => {
    // TODO: update a comment
})

const deleteComment = asyncHandler(async (req, res) => {
    // TODO: delete a comment
})

export {
    getVideoComments, 
    addComment, 
    updateComment,
     deleteComment
    }
