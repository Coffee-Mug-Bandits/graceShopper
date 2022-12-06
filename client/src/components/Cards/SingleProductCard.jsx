import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SingleProductCard({
  selectedProduct,
  cart,
  createOrderProduct,
  setError,
  error,
}) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center flex-col justify-center mt-44">
      <h2 className="text-5xl mb-2">{selectedProduct.name}</h2>
      <div className="flex justify-center bg-gradient-to-t from-yellow-900 to-yellow-600 items-center flex-row flex-wrap border-black border-x-2 border-y-2 h-96 w-screen rounded-md text-yellow-50">
        <img
          className="flex justify-center h-80 mt-4"
          src="https://m.media-amazon.com/images/I/717zDSCMKPL._AC_SX425_.jpg"
        />
        <h3 className="text-2xl absolute right-28 mb-36">
          Price: {selectedProduct.price}
        </h3>
        <button
          onClick={async () => {
            try {
              await createOrderProduct({
                order_id: cart.id,
                product_id: selectedProduct.id,
              });
              setError("");
            } catch (err) {
              setError(err.response.data.message);
              console.log(error);
            }
          }}
          className="text-2xl absolute right-28 mt-20 bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {" "}
          Add to Cart{" "}
        </button>
        <button
          onClick={() => {
            navigate(`/products`);
          }}
          className="text-2xl absolute right-28 mb-12 bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {" "}
          Back to Shop
        </button>
      </div>
      <h3 className="text-3xl">{selectedProduct.description}</h3>
    </div>
  );
}

// https://www.officedepot.com/a/products/4582120/Shaquille-ONeal-Zephyrus-Ergonomic-Bonded-Leather/
