import React, { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import SingleProductCard from "./Cards/SingleProductCard";
import useCart from "../hooks/useCart";
import { useState } from "react";
import useUsers from "../hooks/useUsers";

export default function SingleProduct() {
  const { productId } = useParams();
  const { selectedProduct, fetchProduct } = useProducts();
  const { cart, createOrderProduct } = useCart();
  const [error, setError] = useState();
  const { selectedUser } = useUsers();

  useEffect(() => {
    fetchProduct(productId);
  }, []);
  console.log(selectedProduct);
  return (
    <div>
      {error && (
        <h3
          className="flex justify-center m-6 font-bold bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          {error}
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              class="fill-current h-6 w-6 text-red-500"
              role="button"
              viewBox="0 0 20 20"
              onClick={() => {
                setError("");
              }}
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </h3>
      )}{" "}
      <SingleProductCard
        selectedProduct={selectedProduct}
        cart={cart}
        createOrderProduct={createOrderProduct}
        setError={setError}
        error={error}
        selectedUser={selectedUser}
      />{" "}
    </div>
  );
}
