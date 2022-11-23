const orderRouter = require("express").Router();
const prisma = require("../prisma/prisma")
const { asyncErrorHandler } = require("./utils")


orderRouter.get (
    "/",
    asyncErrorHandler(async (req, res, next) => {
const orders = await prisma.Order.findMany({

})
res.send(orders);
})
);

orderRouter.get(
    "/:orderid",
    asyncErrorHandler(async (req, res, next) => {
        const singleOrder = await prisma.Order.findUnique({
            where: {
                id: +req.params.orderid
            },
        })
        res.send(singleOrder);
    })
)

orderRouter.delete(
    "/:orderid",
    asyncErrorHandler(async (req, res, next) => {
        const deleteOrder = await prisma.Order.delete({
            where: {
                id: +req.params.orderid
            }
        });
        res.send(deleteOrder);
    })
)

module.exports = orderRouter
