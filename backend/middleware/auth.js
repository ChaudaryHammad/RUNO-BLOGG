const jwt = require('jsonwebtoken');

const Auth = async (req, res, next) => {
    try {
        // Check if the authorization header exists
        if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
            return res.status(400).json({ message: "Missing or invalid Authorization header" });
        }

        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        next();
    } catch (error) {
        // If token verification fails
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Invalid token" });
        }
        // For other errors
        return res.status(500).json({ message: "Authentication error Invalid token" });
    }
};

module.exports = Auth;
