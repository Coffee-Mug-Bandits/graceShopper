import { useEffect } from "react";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => {
        console.log(product);
        return <div>{JSON.stringify(product)}</div>;
      })}
    </div>
  );
}
