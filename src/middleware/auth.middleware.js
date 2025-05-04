const jwt = require("jsonwebtoken");
const { SECRET_KEY_ACCESS } = require("../config/configuration");

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).send("Access token missing");
    }

    jwt.verify(token, SECRET_KEY_ACCESS, (err, user) => {
        if (err) {
            return res.status(403).send("Invalid or expired token");
        }
        req.user = user
        next();
    });
}

module.exports = authenticateToken;
