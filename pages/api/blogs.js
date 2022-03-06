import dbConnect from '../../lib/dbConnect';
import Blog from '../../models/Blog';

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case 'GET':
      return getBlog(req, res);
    case 'POST':
      return createBlog(req, res);
  }
}

const getBlog = async (req, res) => {
  let blogs = await Blog.find();
  console.log(blogs);
  res.status(200).json(blogs);
};
const createBlog = async (req, res) => res.json({ message: 'hello' });
