import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import validateUser from '../util/validateUser.js';

const createToken = _id => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: '2d',
  });
};

// SIGNUP / create user
export const signupUser = async (req, res) => {
  try {
    const { user } = req.body;

    if (typeof user !== 'object') {
      res.status(400).json({
        success: false,
        msg: `You need to provide a 'user' object. Received: ${JSON.stringify(
          user
        )}`,
      });

      return;
    }

    const errorList = validateUser(user);

    if (errorList.length > 0) {
      res
        .status(400)
        .json({ success: false, msg: validationErrorMessage(errorList) });
    } else {
      const newUser = await User.signup(user);
      // create token
      const token = createToken(newUser._id);
      // send token to client
      res.status(201).json({
        success: true,
        id: newUser._id,
        email: newUser.email,
        token,
      });
    }
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: `Unable to create user, ${error}` });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // Create token
    const token = createToken(user._id);

    res.status(200).json({
      success: true,
      id: user._id,
      email,
      token,
    });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: `Unable to login user: ${error.message}` });
  }
};
