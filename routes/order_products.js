const router = require("express").Router();
const prisma = require("../prisma/prisma");
const { asyncErrorHandler } = require("./utils");

router.post(
  "/:order_id/:product_id",
  asyncErrorHandler(async (req, res, next) => {
    const { order_id, product_id } = req.params;
    const op = await prisma.Order_products.create({
      data: {
        order_id: +order_id,
        product_id: +product_id,
        qty: 1,
      },
    });
    res.send(op);
  })
);

// PATCH /api/orders/:order_id/:product_id => update the qty

router.delete(
  "/:order_id/:product_id",
  asyncErrorHandler(async (req, res, next) => {
    const { order_id, product_id } = req.params;
    const op = await prisma.Order_products.delete({
      // puppy_id_trick_id: { puppy_id: +puppy_id, trick_id: +trick_id },
      where: {
        order_id_product_id: {
          order_id: +order_id,
          product_id: +product_id,
        },
      },
    });
    res.send(op);
  })
);

router.patch(
  "/:order_id/:product_id",
  asyncErrorHandler(async (req, res,next) => {
    const {order_id, product_id} = req.params;
    const {qty} = req.body; 
    const patchop = await prisma.Order_products.update({
      where: {
        order_id_product_id: {
          order_id: +order_id,
          product_id: +product_id,
        },
       },
      data: {qty: +qty}
    });
    res.send(patchop);
  })
)
module.exports = router;
