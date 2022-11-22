const prisma = require("./prisma");

const { Users, Order, Product, Order_products, Seller } = require("./seedData");

const seedDb = async () => {
  console.log("creating users...");
  await Promise.all(
    Users.map(async (User) => {
      return prisma.Users.create({
        data: User,
      });
    })
  );

  console.log("creating Order....");

  await Promise.all(
    Order.map(async (order) => {
      return prisma.Order.create({
        data: order,
      });
    })
  );

  console.log("creating Seller....");

  await Promise.all(
    Seller.map(async (seller) => {
      return prisma.Seller.create({
        data: seller,
      });
    })
  );

  console.log("creating Product....");

  await Promise.all(
    Product.map(async (product) => {
      return prisma.Product.create({
        data: product,
      });
    })
  );

  console.log("creating Order_products....");

  await Promise.all(
    Order_products.map(async (op) => {
      return prisma.Order_products.create({
        data: op,
      });
    })
  );
};

const initDb = async () => {
  try {
    await seedDb();
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect;
  }
};

initDb();
