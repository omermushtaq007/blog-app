import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    heroImage: {
      type: String,
      required: false, // false because we don't want to require it for now
    },
    secondaryImage: {
      type: Array,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Array,
      default: [],
    },
    dislikes: {
      type: Array,
      default: [],
    },
    comments: {
      commentator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      message: {
        type: String,
        default: '',
      },
    },
  },
  { timestamps: true, strict: false }
);

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
