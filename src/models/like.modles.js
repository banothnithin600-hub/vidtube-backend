import mongoose ,{Schema} from "mongoose";

const likeSchema = new Schema({
 //sither of 'video','comment' or 'tweet' will be assigned others are null
 video:{
    type:Schema.Types.ObjectId,
    ref:"Video"
 },
 comment:{
    type:Schema.Types.ObjectId,
    ref:"Comment"
 },
 tweet:{
    type:Schema.Types.ObjectId,
    ref:"Tweet"
 },
 likedBv:{
    type:Schema.Types.ObjectId,
    ref:"User"
 },
},
 {timestamps:true}
)

export const like = mongoose.model("Like", likeSchema);