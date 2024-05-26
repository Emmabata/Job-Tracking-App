import { StatusCodes } from "http-status-codes";
import User from '../models/UserModel.js';
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";

//Admin User authentication for Register
export const register = async (req, res) => {
    const isFirstAccount = (await User.countDocuments()) === 0;
    req.body.role = isFirstAccount ? 'admin' : 'user';

    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg : 'user created'});
};

export const login = async (req, res) => {
//find if the user exits
    const user = await User.findOne({email: req.body.email});
//if yes then compare the inputed password with the hashedpassword in the database
    const isValidUser = user && (await comparePassword(req.body.password, user.password));
//if not return a 401 custom error
    if(!isValidUser) throw new UnauthenticatedError('invalid credentials');

    res.send('Login');
};

