const orderRouter = require("express").Router();
const prisma = require("../prisma/prisma");
const { asyncErrorHandler } = require("./utils");

// Double Check Include Statment
orderRouter.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const orders = await prisma.Order.findMany({
      include: {
        order_products: {
          include: {
            products: true,
          },
        },
      },
    });
    res.send(orders);
  })
);

orderRouter.get(
  "/:orderid",
  asyncErrorHandler(async (req, res, next) => {
    const singleOrder = await prisma.Order.findUnique({
      where: {
        id: +req.params.orderid,
      },
      include: {
        order_products: {},
      },
    });
    res.send(singleOrder);
  })
);

orderRouter.delete(
  "/:orderid",
  asyncErrorHandler(async (req, res, next) => {
    const deleteOrder = await prisma.Order.delete({
      where: {
        id: +req.params.orderid,
      },
    });
    res.send(deleteOrder);
  })
);

orderRouter.patch(
  "/:orderid",
  asyncErrorHandler(async (req, res, next) => {
    const updatedOrder = await prisma.Order.update({
      where: {
        id: +req.params.orderid,
      },
      data: req.body,
    });
    res.send(updatedOrder);
  })
);

module.exports = orderRouter;
