import { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import ProductsCard from "../components/Cards/ProductsCard";

export default function Products() {
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="flex justify-center mb-10 text-xl">
        Welcome to Legally Sold Coffee Mugs
      </h1>

      <div className="flex flex-row justify-around flex-wrap gap-y-6">
        {products.map((product) => {
          console.log(product);
          return <ProductsCard product={product} />;
        })}
      </div>
    </div>
  );
}
