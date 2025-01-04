// controllers/signupController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// async function signup(req, res) {
//   try {
//     const { name, password } = req.body;

//     // Validate request data
//     if (!name || !password) {
//       return res.status(400).json({ error: 'Please provide all required fields' });
//     }

//     // // Check if user already exists
//     // const existingUser = await prisma.user.findUnique({ where: { name: name }});
//     // if (existingUser) {
//     //   return res.status(400).json({ error: 'Name already exists' });
//     // }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const user = await prisma.user.create({
//         data: {
//          name, password: hashedPassword }
//   });

//     // Generate JWT token
//     const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
//       expiresIn: '1h',
//     });

//     res.json({ token, user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// module.exports = { signup }

// controllers/SignUpController.js
// const bcrypt = require('bcrypt');
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

async function signup(req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        password: hashedPassword,
      },
    });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Error creating user' });
  }
};
module.exports = { signup }
