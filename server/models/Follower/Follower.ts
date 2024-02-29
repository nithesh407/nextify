import { model, models, Schema, Types } from "mongoose";

const FollowerSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        unique: true,
        ref: 'User'
    },
    followerId: {
        type: [Types.ObjectId],
        ref: 'User'
    }
})

const FollowerModel = models?.Follower || model('Follower', FollowerSchema)

export default FollowerModel