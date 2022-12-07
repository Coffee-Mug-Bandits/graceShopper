import { useEffect } from "react";
import productCard from "./ProductsCard";

export default function CartCard({
  cart,
  updateQty,
  deleteItem,
  fetchCart,
  getMe,
}) {
  // useEffect(() => {
  //   fetchCart();
  // }, []);
  return (
    <div className="">
      {cart?.order_products?.map((op) => {
        cart.totalAmount += (op.products.price * op.qty) / 2;
        return (
          <div className="flex bg-gradient-to-t from-yellow-900 to-yellow-600 items-center flex-row flex-wrap border-black border-x-2 border-y-2 h-40 w-auto rounded-md text-yellow-50 justify-around mt-2">
            <img className="h-28" src={op.products.imageUrl} />
            <h2 className="p-4">{op.products.name}</h2>
            <h2 className="p-4">Price: ${op.products.price}.00</h2>
            <h2 className="self-auto">Qty: {op.qty}</h2>
            <span className="flex flex-col ">
              <button
                className="font-mono text-xl"
                onClick={async () => {
                  console.log(op.qty);
                  console.log(fetchCart);
                  await updateQty({
                    order_id: op.order_id,
                    product_id: op.product_id,
                    qty: ++op.qty,
                  });
                  fetchCart();
                }}
              >
                +
              </button>
              <button
                className="font-mono text-xl"
                onClick={async () => {
                  console.log(op.qty);
                  if (op.qty === 1) {
                    await deleteItem({
                      order_id: op.order_id,
                      product_id: op.product_id,
                    });
                  } else {
                    await updateQty({
                      order_id: op.order_id,
                      product_id: op.product_id,
                      qty: --op.qty,
                    });
                  }
                }}
              >
                -
              </button>
              <button
              onClick={async () => {
                await deleteItem({
                  order_id: op.order_id,
                  product_id: op.product_id,
                });
              }}
              >Delete</button>
            </span>
          </div>
        );
      })}
      <div className="text-3xl">
      Total: ${cart.totalAmount}.00
      </div>
    </div>
  );
}
