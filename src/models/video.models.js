// id string [pk]
//   title string
//   description text
//   videoFile string
//   thumbnail string
//   views int
//   ownerId string
//   createdAt timestamp
//   updatedAt timestamp
// }


import mongoose ,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
 vidoFile:{
    type:String,//cloudinary url
    required:true
 },
 thumbnail:{
    type:String,//cloudinary url
    required:true
 },
 description:{
    type:String,
    required:true
 },
 views:{
    type:Number,
   default:0
 },
 duration:{
    type:Number,
    required:true
 },
 isPublished:{
   type:Boolean,
   default:true
 },
 owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
 }
},{timestamps:true}
)

vodeoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema);