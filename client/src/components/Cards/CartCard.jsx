import productCard from "./ProductsCard";

export default function CartCard({ cart }) {
  return (
    <div>
      {cart.order_products.map((op) => {
        cart.totalAmount += (op.products.price * op.qty) / 2;
        return (
          <div>
            <h2>{op.products.name}</h2>
            <img
              className="h-40"
              src="https://m.media-amazon.com/images/I/717zDSCMKPL._AC_SX425_.jpg"
            />
            <h2>${op.products.price}.00</h2>
            <h2>Qty: {op.qty}</h2>
          </div>
        );
      })}
      Total: ${cart.totalAmount}.00
    </div>
  );
}
