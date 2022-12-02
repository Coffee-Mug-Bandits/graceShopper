import { useEffect } from "react";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
       <h5> Welcome to Legally Sold Coffee Mugs</h5>
    <div>
      {products.map((product) => {
        console.log(product);
        return <div>
          {product.name}
        </div>;
      })}
    </div>
    </div>
  );
}
