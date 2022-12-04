export default function SingleProductCard({ selectedProduct }) {
  return (
    <div>
      <h2>{selectedProduct.name}</h2>
      <h3>{selectedProduct.description}</h3>
      <h3>{selectedProduct.price}</h3>
    </div>
  );
}
