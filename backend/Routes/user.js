import express from "express";
import cors from "cors";
import zod from "zod";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../Modal/userModal.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const userRouter = express.Router();

const signupValidator = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(5),
});

userRouter.post("/signup", async (req, res) => {
    const body = req.body;
    // console.log("body", body);
    const success = signupValidator.safeParse(body);
    if (!success) {
        return res.status(403).json({ msg: "invalid inputs" });
    }

    try {
        const Check = await User.findOne({
            email: body.email,
        });
        if (Check) {
            return res.status(403).json({ msg: "email already exist" });
        }

        const response = await User.create({
            username: body.username,
            email: body.email,
            password: bcrypt.hashSync(body.password, 10),
            // isadmin:false
        });
        // console.log(response);
        const token = jwt.sign(response._id.toHexString(), process.env.SECRET);
        return res.json({
            name: response.username,
            token: token,
            userId: response._id.toHexString(),
        });
    } catch (error) {
        console.error("Signup error:", error);
        return res.status(404).json({ msg: "signup error" });
    }
});

//login

const loginValidator = zod.object({
    email: zod.string().email(),
    password: zod.string().min(5),
});

userRouter.post("/signin", async (req, res) => {
    const body = req.body;
    const success = loginValidator.safeParse(body);
    if (!success) {
        return res.status(403).json({ msg: "invalid inputs" });
    }

    try {
        const emailCheck = await User.findOne({
            email: body.email,
        });
        if (!emailCheck) {
            return res.status(403).json({ msg: "email does not exist" });
        }

        const passwordMatch = await bcrypt.compare(body.password, emailCheck.password);

        if (!passwordMatch) {
            return res.status(403).json({ msg: "Incorrect password" });
        }
        const token = jwt.sign(emailCheck._id.toHexString(), process.env.SECRET);
        return res.json({
            name: emailCheck.username,
            token: token,
            userId: emailCheck._id.toHexString(),
        });
    } catch (error) {
        return res.status(404).json({ msg: "login error" });
    }
});

export default userRouter;