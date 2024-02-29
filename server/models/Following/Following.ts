import { model, models, Schema, Types } from "mongoose";

const FollowingSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        unique: true,
        ref: 'User'
    },
    followingId: {
        type: [Types.ObjectId],
        ref: 'User'
    }
})

const FollowingModel = models?.Following || model('Following', FollowingSchema)

export default FollowingModel