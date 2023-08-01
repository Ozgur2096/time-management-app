import express from 'express';

import { signupUser, loginUser } from '../controllers/auth.js';

const authRouter = express.Router();

// login route
authRouter.post('/login', loginUser);
// signup route
authRouter.post('/signup', signupUser);

export default authRouter;
