import { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import ProductsCard from "../components/Cards/ProductsCard";
import useUsers from "../hooks/useUsers";
import useCart from "../hooks/useCart";

export default function Products() {
  const { createOrderProduct, cart } = useCart();
  const { products, fetchProducts } = useProducts();
  const { selectedUser } = useUsers();
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(selectedUser);
  return (
    <div>
      <h1 className="flex justify-center mb-10 text-xl">
        Welcome to Legally Sold Coffee Mugs
      </h1>

      <div className="flex flex-row justify-around flex-wrap gap-y-6">
        {products.map((product) => {
          console.log(product);
          return (
            <ProductsCard
              cart={cart}
              product={product}
              selectedUser={selectedUser}
              createOrderProduct={createOrderProduct}
            />
          );
        })}
      </div>
    </div>
  );
}
