export default function CartCard({ cart }) {
  return (
    <div>
      {cart.order_products.map((op) => {
        return (
          <h2>
            {op.products.name}
            <h2>{op.products.price}</h2>
            <h2>{op.qty}</h2>
          </h2>
        );
      })}
    </div>
  );
}
