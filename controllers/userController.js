const { default: mongoose } = require("mongoose");
const userModel = require("../models/userModel");

const userController = {};

userController.update = async (req, res) => {
    const { name, email, userId } = req.body;

    if (! mongoose.isValidObjectId(userId)) return res.status(404).json({ message: "userId is not valid" })

    if (!name.trim() || !email.trim())
        return res.status(400).json({ message: "all fields required" })
    try {
        const updated = await userModel.findByIdAndUpdate(
            { _id: userId },
            { name: name, email: email },
            { new: true }).select("name email");

        if (updated) res.json(updated)
        else res.json({ message: "failed to update, user not found" })
    } catch (e) {
        return res.status(500).json(e)
    }
}

userController.getUser = async (req, res) => {
    const userId = req.params.userId;
    if (! mongoose.isValidObjectId(userId)) return res.status(404).json({ message: "userId is not valid" })
    const user = await userModel.findOne({ _id: userId }).select("-password").lean().exec();
    if (user) res.json(user)
    else res.json({ message: "user not found" })
}

userController.getAllUser = async (req, res) => {
    const user = await userModel.find({}).select("name email").lean().exec();
    res.json(user)
}

module.exports = userController;