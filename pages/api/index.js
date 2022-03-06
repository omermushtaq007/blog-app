// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';


export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case 'GET':
      return getUsers(req, res);
    case 'POST':
      return createUser(req, res);
  }
}

const getUsers = async (req, res) => {
  let users = await User.find();
  res.status(200).json(users);
};
const createUser = async (req, res) => {};
