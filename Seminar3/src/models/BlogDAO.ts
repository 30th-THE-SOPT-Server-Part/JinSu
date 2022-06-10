import mongoose, { Model, Document }   from 'mongoose';
import { Blog }   from "../interfaces/blog/Blog";
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
        type: mongoose.Types.ObjectId,
        required: true
    }
})

export default mongoose.model<Blog & mongoose.Document>("Blog", BlogSchema);