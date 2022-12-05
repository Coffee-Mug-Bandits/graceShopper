import productCard from "./ProductsCard";

export default function CartCard({ cart }) {
  return (
    <div className="">
      {cart.order_products.map((op) => {
        cart.totalAmount += (op.products.price * op.qty) / 2;
        return (
          <div className="flex bg-gradient-to-t from-yellow-900 to-yellow-600 items-center flex-row flex-wrap border-black border-x-2 border-y-2 h-40 w-auto rounded-md text-yellow-50 justify-around mt-2">
            <img
              className="h-20"
              src="https://m.media-amazon.com/images/I/717zDSCMKPL._AC_SX425_.jpg"
            />
            <h2 className="p-4">{op.products.name}</h2>
            <h2 className="p-4">Price: ${op.products.price}.00</h2>
            <h2 className="self-auto">Qty: {op.qty}</h2>
          </div>
        );
      })}
      Total: ${cart.totalAmount}.00
    </div>
  );
}
