import React, { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import { useParams } from "react-router-dom";
export default function SingleProduct() {
  const { productId } = useParams();
  const { selectedProduct, fetchProduct } = useProducts();

  useEffect(() => {
    fetchProduct(productId);
  }, []);

  return <div>{JSON.stringify(selectedProduct)}</div>;
}
