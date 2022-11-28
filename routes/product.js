const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const products = await prisma.Product.findMany();
    res.send(products);
  })
);

router.get(
  "/:productId",
  asyncErrorHandler(async (req, res, next) => {
    const singleProduct = await prisma.Product.findUnique({
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
    const createdProduct = await prisma.Product.create({
      data: req.body,
    });
    res.send(createdProduct);
  })
);

router.patch(
  "/:productId",
  asyncErrorHandler(async (req, res, next) => {
    const updatedProduct = await prisma.Product.update({
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
    const deletedProduct = await prisma.Product.delete({
      where: {
        id: +req.params.productId,
      },
    });
    res.send(deletedProduct);
  })
);

module.exports = router;
