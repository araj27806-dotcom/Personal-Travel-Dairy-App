import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username ||
        !email ||
        !password ||
        username==="" ||
        email==="" ||
        password==="") {
        return next(errorhandler(400, "All fields are required"));
    }

    const hashedPassword = bcrypt.hashSync(password, 10)

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.json({ message: "Signup successfully" });   
    } catch (error) {
        res.status(500).json({ message: "Error in signup", error: error.message });
        next(error);
    }
}
