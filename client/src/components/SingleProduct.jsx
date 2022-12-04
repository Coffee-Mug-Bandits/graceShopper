import React, { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import SingleProductCard from "./Cards/SingleProductCard";
export default function SingleProduct() {
  const { productId } = useParams();
  const { selectedProduct, fetchProduct } = useProducts();

  useEffect(() => {
    fetchProduct(productId);
  }, []);
  console.log(selectedProduct);
  return (
    <div>
      {" "}
      <SingleProductCard selectedProduct={selectedProduct} />{" "}
    </div>
  );
}
