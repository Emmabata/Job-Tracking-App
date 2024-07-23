import { UnauthenticatedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
    const { token } = req.cookies;
    console.log('Cookies:', req.cookies);

    if(!token) throw new UnauthenticatedError('authentication invalid');
    
    try {
        const {userId, role} = verifyJWT(token);
        console.log('Token verified:', {userId, role});
        req.user = {userId, role};
        next();
    } catch (error) {
        console.log('Token verification failed:', error);
        throw new UnauthenticatedError('authentication invalid');
    }
};