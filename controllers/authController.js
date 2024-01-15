const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');

const authController = {};

authController.signup = async (req, res) => {
    const userdata = { name, email, password } = req.body;
    if (name == "" || email == "" || username=="" || password== "")
        return res.status(400).json({ message: 'all fields required' });
    else if (password.length < 8)
        return res.status(400).json({ message: 'password length is too short' });
    
    const existingUser = await userModel.findOne({ email: email }).lean().exec()
    if (existingUser)
        return res.status(409).json({ message: 'Email alredy used' });

    const user = await userModel.create(userdata)

    if (user) {
        res.status(201).json({ message: "user created" })
    } else {
        res.status(400).json({ message: "invalid user data received" })
    }
}

authController.signin = async (req, res) => {
    const { email, password } = req.body;
    if (email == "" || password== "")
        return res.status(400).json({ message: 'all fields required' });

    const existingUser = await userSchema.findOne({ email: email }).lean().exec()

    if (!existingUser) return res.status(400).json({ message: 'email not found' });

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) return res.status(401).json({message:"wrong password"});

    res.json({"token":"will sent soon"}) // TODO handle this
}

module.exports = authController;