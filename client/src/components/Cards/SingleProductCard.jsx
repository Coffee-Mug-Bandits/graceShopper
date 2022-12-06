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
    <div className="flex items-center flex-col justify-center">
      <h2 className="flex  mt-10 text-black text-4xl font-bold font-mono">
        {selectedProduct.name}
      </h2>
      <div className="flex flex-row flex-wrap justify-around mt-24 bg-gradient-to-t from-yellow-900 to-yellow-600 items-center flex-row flex-wrap border-black border-x-2 border-y-2 h-96 w-screen rounded-md text-yellow-50">
        <img
          className="flex justify-start h-80 m-8"
          src="https://m.media-amazon.com/images/I/717zDSCMKPL._AC_SX425_.jpg"
        />
        <div className="flex flex-col font-mono ">
          <h3 className="font-mono justify-items-center mb-8 font-bold text-xl">
            Price: ${selectedProduct.price}.00
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
            className="flex justify-center mb-4 w-48 h-12 bg-yellow-50 hover:bg-yellow-200 hover:scale-95 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            {" "}
            Add to Cart{" "}
          </button>
          <button
            onClick={() => {
              navigate(`/products`);
            }}
            className="flex justify-center mt-6 w-48 h-12 bg-yellow-50 hover:bg-yellow-200 hover:scale-95 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            {" "}
            Back to Shop
          </button>
        </div>
      </div>
      <h3 className="text-3xl font-mono">{selectedProduct.description}</h3>
    </div>
  );
}

// https://www.officedepot.com/a/products/4582120/Shaquille-ONeal-Zephyrus-Ergonomic-Bonded-Leather/
