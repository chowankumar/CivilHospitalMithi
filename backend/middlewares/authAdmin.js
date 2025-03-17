import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
    try {
        const { aToken } = req.headers;
        if (!aToken) {
            return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
        }

        const token_decode = jwt.verify(aToken, process.env.JWT_SECRET);

        // Fix: Check the actual email and password from decoded token
        if (token_decode.email !== process.env.ADMIN_EMAIL || token_decode.password !== process.env.ADMIN_PASSWORD) {
            return res.status(403).json({ success: false, message: "Not Authorized. Login Again" });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: "Invalid Token" });
    }
};

export default authAdmin;
