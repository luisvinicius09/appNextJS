import dbConnect from '../../utils/dbConnect'
import User from '../../models/User'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export default async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      // Create a user validation to check if the username/email already exists!
      try {
        const user = await User.create({
          username: req.body.username,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 8)
        })
        res.status(201).json({success: true, data: user})
      } catch (error) {
        res.status(400).json({success: false})
      }
    case 'PUT':
      break
    case 'PATCH':
      break
  }
}
