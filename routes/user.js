const userRouter = require("express").Router();
const prisma = require("../prisma/prisma")
const { asyncErrorHandler, authRequired } = require("./utils")
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const JWT_SECRET = process.env; 
const jwt = require ("jsonwebtoken");

userRouter.get (
    "/",
    asyncErrorHandler(async (req, res, next) => {
const users = await prisma.Users.findMany();
res.send(users);
})
);

userRouter.post (
    "/register", 
    asyncErrorHandler(async (req, res, next) => {
        const { username, password, email, location } = req.body; 
        // const checkuser = await prisma.Users.findUnique({
        //     where: {
        //         username: username, 
        //     }
        // })
        // if (checkuser) {
        //     next({
        //         name: "NotNewUserError",
        //         message: "That username has been taken",
        //       });
        // }

        const hashedpassword = await bcrypt.hash(password, SALT_ROUNDS);
        const user = await prisma.Users.create({
            data: {
                username: username,
                password: hashedpassword,
                email: email, 
                location: location
            }
        })
        delete user.password;
        // const token = jwt.sign(user, JWT_SECRET);

        // res.cookie("token", token, {
        //     sameSite: "strict",
        //     httpOnly: true,
        //     signed: true,
        //   });


        res.send(user)
    })

)

module.exports = userRouter