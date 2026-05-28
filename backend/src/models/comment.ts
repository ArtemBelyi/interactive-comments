import mongoose, { Schema, Document } from "mongoose";

export interface IComment extends Document {
    content: string;
    createdAt: Date | string;
    score: number;
    user: mongoose.Types.ObjectId;
    replies?: mongoose.Types.ObjectId[];
}

const commentSchema: Schema = new Schema<IComment>({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    score: { type: Number, default: 0 },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    replies: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
}, { timestamps: true });

export default mongoose.model<IComment>("Comment", commentSchema);