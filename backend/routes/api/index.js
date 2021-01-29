const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require("./listings.js")

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/listings', listingsRouter)

module.exports = router;










// -------------------------- Testing code --------------------------
// GET /api/set-token-cookie
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
// const { User } = require('../../db/models');

// Testing routes
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// // GET /api/restore-user
// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// // GET /api/require-auth
// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// router.post('/test', (req,res) => {
//     res.json({ requestBody: req.body });
// })