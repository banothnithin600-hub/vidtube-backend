import mongoose ,{Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscription:{
       type:Schema.Types.ObjectId,//one who IS subscription
        ref:"User"
    },
    channel:{
      type:Schema.Types.ObjectId,//one who IS subscription
        ref:"User"
    }
},
{timestamps:true}
)

export const subscription = mongoose.model("Subscription", subscriptionSchema);