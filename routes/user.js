const userRouter = require("express").Router();
const prisma = require("../prisma/prisma");
const { asyncErrorHandler, authRequired } = require("./utils");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const { JWT_SECRET } = process.env;
const jwt = require("jsonwebtoken");
const e = require("express");

userRouter.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const users = await prisma.Users.findMany();
    res.send(users);
  })
);

userRouter.post(
  "/register",
  asyncErrorHandler(async (req, res, next) => {
    const { username, password, email, location } = req.body;
    const checkuser = await prisma.Users.findUnique({
      where: {
        username: username,
      },
    });
    if (checkuser) {
      next({
        name: "NotNewUserError",
        message: "That username has been taken",
      });
    } else {
      const hashedpassword = await bcrypt.hash(password, SALT_ROUNDS);
      const user = await prisma.Users.create({
        data: {
          username: username,
          password: hashedpassword,
          email: email,
          location: location,
        },
      });
      // create a cart => user the user.id to create an order where is_cart = true

      const cart = await prisma.Order.create({
        data: {
          user_id: user.id,
          totalAmount: 0,
          is_cart: true,
        },
      });

      delete user.password;
      const token = jwt.sign(user, JWT_SECRET);

      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });

      res.send(user);
    }
  })
);

userRouter.post(
  "/login",
  asyncErrorHandler(async (req, res, next) => {
    const { username, password } = req.body;
    const user = await prisma.Users.findUnique({
      where: {
        username: username,
      },
    });
    if (user) {
      const validpassword = await bcrypt.compare(password, user.password);
      if (validpassword) {
        const token = jwt.sign(user, JWT_SECRET);

        res.cookie("token", token, {
          sameSite: "strict",
          httpOnly: true,
          signed: true,
        });
        delete user.password;
        res.send(user);
      } else {
        next({
          name: "Invaild Login",
          message: "Username or Password is incorrect",
        });
      }
    } else {
      next({
        name: "Invaild Login",
        message: "Username or Password is incorrect",
      });
    }
  })
);

userRouter.get("/me", authRequired, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    next(error);
  }
});

// * GET api/users/me/cart => Get and order where userId is req.user.id and is_cart = true
userRouter.get(
  "/me/cart",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const cart = await prisma.Order.findFirst({
      where: {
        user_id: req.user.id,
        is_cart: true,
      },
      include: {
        order_products: {
          include: { products: true },
        },
      },
    });
    res.send(cart);
  })
);
// GET api/users/myOrders ??

userRouter.get(
  "/myOrders",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const myOrders = await prisma.Order.findMany({
      where: {
        user_id: req.user.id,
        is_cart: false,
      },
      include: {
        order_products: {
          include: { products: true },
        },
      },
    });
    res.send(myOrders);
  })
);

userRouter.post("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged Out",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
