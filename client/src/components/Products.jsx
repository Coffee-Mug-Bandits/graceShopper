import { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import ProductsCard from "../components/Cards/ProductsCard";
import useUsers from "../hooks/useUsers";
import useCart from "../hooks/useCart";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const { createOrderProduct, cart } = useCart();
  const { products, fetchProducts } = useProducts();
  const [error, setError] = useState();
  const { selectedUser } = useUsers();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(selectedUser);

  function productMatches(product, text) {
    return product.name.toLowerCase().includes(text.toLowerCase());
  }
  const filteredProd = products.filter((product) =>
    productMatches(product, searchTerm)
  );
  const prodsToDisplay = searchTerm.length ? filteredProd : products;
  return (
    <div>
      <div>
        <h1 className="flex justify-center mb-10 text-xl font-mono">
          Welcome to Legally Sold Coffee Mugs
        </h1>
        <input
          className="mt-1 border-2 border-solid border-gray-500 rounded transition ease-in-out focus:border-yellow-400 focus:outline-none"
          type="text"
          value={searchTerm}
          placeHolder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </div>

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
      )}
      <div className="flex flex-row justify-around flex-wrap gap-y-6">
        {prodsToDisplay.map((product) => {
          console.log(product);
          return (
            <ProductsCard
              cart={cart}
              product={product}
              selectedUser={selectedUser}
              createOrderProduct={createOrderProduct}
              setError={setError}
              error={error}
              navigate={navigate}
            />
          );
        })}
      </div>
    </div>
  );
}
