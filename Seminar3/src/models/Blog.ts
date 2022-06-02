import mongoose   from 'mongoose';
import UserSchema from "./User";
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    contents: {
        type: String,
        required: true
    },
    user: {
        type: UserSchema,
        required: true
    }
})

export default mongoose.model<mongoose.Document>("Blog", BlogSchema);