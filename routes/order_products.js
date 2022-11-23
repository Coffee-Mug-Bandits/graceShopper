const router = require("express").Router();
const prisma = require("../prisma/prisma");
const { asyncErrorHandler } = require("./utils");

router.post(
  "/:order_id/:product_id",
  asyncErrorHandler(async (req, res, next) => {
    const { order_id, product_id } = req.params;
    const op = await prisma.order_products.create({
      data: {
        order_id: +order_id,
        product_id: +product_id,
      },
    });
    res.send(op);
  })
);

router.delete(
  "/:order_id/:product_id",
  asyncErrorHandler(async (req, res, next) => {
    const { order_id, product_id } = req.params;
    const op = await prisma.order_products.delete({
      where: {
        order_id: +order_id,
        product_id: +product_id,
      },
    });
    res.send(op);
  })
);

module.exports = router;
