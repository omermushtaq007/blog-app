import mongoose from 'mongoose';

const MONGODB_URI =
  process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined');
}

let cached = global.mongoose;

if (!cached) {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
  cached = global.mongoose = mongoose;
}

export default async function dbConnect() {
  if (!cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
