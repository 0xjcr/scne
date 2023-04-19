// const bcrypt = require('bcrypt');
// const saltRounds = 10;

// const User = require('../models/users');

// exports.create = async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;

//   if (firstName && lastName && email && password) {
//     // check to see if the email is already used (if oldUser exists)
//     if (await User.findOne({ email })) {
//       res.status(400).json({ msg: 'email already in use' });
//     } else {
//       bcrypt
//         .hash(password, saltRounds)
//         .then(async (hash) => {
//           // we have access to the hash which is what we will store in the database
//           const user = await User.create({
//             email,
//             password: hash,
//             firstName,
//             lastName,
//           });
//           res.status(201).json(user);
//         })
//         .catch((err) => console.error(err.message));
//     }
//   } else {
//     res.status(400).json({ msg: 'all fields are mandatory' });
//   }
// };

// exports.login = async (req, res) => {
//   if (req.user) {
//     res.status(200).json({ user: req.user, msg: 'you were already logged in' });
//   } else {
//     const { email, password } = req.body;
//     try {
//       let user = await User.findOne({ email });
//       if (!user) res.status(400).json({ msg: 'email not found' });
//       else {
//         // check to see if the passwords match
//         const hash = user.password;
//         bcrypt.compare(password, hash).then((response) => {
//           if (response) {
//             const session = req.session;
//             session.userid = user.id;
//             res.status(200).json({ msg: 'logged in succesfully', user });
//           } else {
//             res.status(400).json({ msg: 'invalid password' });
//           }
//         });
//       }
//     } catch (err) {
//       console.error(err.message);
//     }
//   }
// };

// exports.profile = async (req, res) => {
//   // check if there is a session
//   if (req.user) {
//     // we have the user id, which we can then use to query the database for whatever we need
//     res.status(201).json({ msg: 'you are inside, session in progress' });
//   } else
//     res.status(400).json({ msg: 'you need to log in to be here, no session' });
// };

// exports.logout = (req, res) => {
//   console.log(req.user);
//   if (req.user) {
//     req.session.destroy();
//     res.status(202).json({ msg: 'logged out successfully' });
//   } else {
//     res.status(400).json({ msg: 'no session found' });
//   }
// };


