import mongoose from 'mongoose';

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined');
}

let cached = global.mongoose;

if (!cached) {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
  cached = global.mongoose = mongoose;
}
