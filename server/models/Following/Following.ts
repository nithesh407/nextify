import { model, models, Schema, Types } from "mongoose";

const FollowingSchema = new Schema({
    userId: {
        type: Types.ObjectId
    },
    followingId: {
        type: [Types.ObjectId]
    }
})

const FollowingModel = models?.Following || model('Following', FollowingSchema)