import { model, models, Schema, Types } from "mongoose";

const FollowerSchema = new Schema({
    userId: {
        type: Types.ObjectId
    },
    followerId: {
        type: [Types.ObjectId]
    }
})

const FollowerModel = models?.Follower || model('Follower', FollowerSchema)