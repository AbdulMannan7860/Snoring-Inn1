const jwt = require('jsonwebtoken');
const User = require('../Modals/User.modal.js');

const JWTSECRET = process.env.JWT_SECRET;

const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token')?.toString();

    if (!token) {
        return res.status(401).send('Access Denied');
    }

    try {
        const verify = jwt.verify(token, JWTSECRET);
        if (!verify) {
            return res.status(401).send('Invalid Token');
        }

        const user = await User.findById(verify.id).select('-password');
        if (!user) {
            return res.status(401).send('User Not Found');
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Token verification error:', error);
        res.status(401).send('Invalid Token');
    }
};

module.exports = fetchUser;
