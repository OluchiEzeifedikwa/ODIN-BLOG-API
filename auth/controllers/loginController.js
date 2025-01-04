// controllers/loginController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


// async function login (req, res)  {
//   try {
//     const { name, password } = req.body;

//     // Validate request data
//     if (!name || !password) {
//       return res.status(400).json({ error: 'Please provide all required fields' });
//     }

//     // Find user by name
//     const user = await prisma.findUnique({ where: {name} });
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid name or password' });
//     }

//     // Compare passwords
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ error: 'Invalid name or password' });
//     }

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

// module.exports = { login }



// controllers/LoginController.js
// const passport = require('passport');
// const jwt = require('jsonwebtoken');

function login(req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    // if (!user) {
    //   return res.status(401).json({ message: 'Invalid credentials' });
    // }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    return res.json({ token });
  })(req, res, next);
};
module.exports = { login }




