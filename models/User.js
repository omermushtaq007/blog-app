import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
    },
    emailAddress: {
      type: String,
      required: true,
      unique: [true, 'Email address is already in use'],
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      isAdmin: {
        type: Boolean,
        default: false,
      },
      isAuthor: {
        type: Boolean,
        default: false,
      },
      isGuest: {
        type: Boolean,
        default: true,
      },
    },
    profileImage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true, strict: true }
);

export default mongoose.models.User || mongoose.model('User', userSchema);