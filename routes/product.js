const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const order = await prisma.products.findMany();
    res.send(order);
  })
);

router.get(
  "/:productId",
  asyncErrorHandler(async (req, res, next) => {
    const singleProduct = await prisma.products.findUnique({
      where: {
        id: +req.params.productId,
      },
    });
    res.send(singleProduct);
  })
);

router.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    // const { name, age, email, ownerId } = req.body;
    const createdProduct = await prisma.products.create({
      data: req.body,
    });
    res.send(createdProduct);
  })
);

router.patch(
  "/:productId",
  asyncErrorHandler(async (req, res, next) => {
    const updatedProduct = await prisma.products.update({
      where: {
        id: +req.params.productId,
      },
      data: req.body,
    });
    res.send(updatedProduct);
  })
);

router.delete(
  "/:productId",
  asyncErrorHandler(async (req, res, next) => {
    const deletedProduct = await prisma.products.delete({
      where: {
        id: +req.params.productId,
      },
    });
    res.send(deletedProduct);
  })
);

module.exports = router;
