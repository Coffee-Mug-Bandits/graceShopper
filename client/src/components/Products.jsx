import { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import ProductsCard from "../components/Cards/ProductsCard";
import useUsers from "../hooks/useUsers";
import useCart from "../hooks/useCart";
import { useState } from "react";

export default function Products() {
  const { createOrderProduct, cart } = useCart();
  const { products, fetchProducts } = useProducts();
  const [error, setError] = useState();
  const { selectedUser } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(selectedUser);

  function productMatches(product, text) {
    return product.name.toLowerCase().includes(text.toLowerCase());
  }
  const filteredProd = products.filter(product => productMatches(product, searchTerm));
  const prodsToDisplay = searchTerm.length ? filteredProd : products;
  return (
    <div>
      <div className="flex mb-10 flex-row justify-center">
      <h1 className="mr-12 text-xl">
        Welcome to Legally Sold Coffee Mugs
      </h1>
      <input className="mt-1 border-2 border-solid border-gray-500 rounded transition ease-in-out focus:border-yellow-400 focus:outline-none"
      type="text"
      value={searchTerm}
      placeHolder="Search"
      onChange={(e) => setSearchTerm(e.target.value)}
      >
      </input>
      </div>

      {error && <h3 className="flex justify-center text-red-500">{error}</h3>}
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
            />
          );
        })}
      </div>
    </div>
  );
}
