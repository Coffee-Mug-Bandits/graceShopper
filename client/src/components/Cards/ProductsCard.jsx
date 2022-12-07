// import { useNavigate } from "react-router-dom";

export default function productCard({
  product,
  cart,
  createOrderProduct,
  setError,
  navigate,
}) {
  // const navigate = useNavigate();
  return (
    <div className="flex bg-gradient-to-t from-yellow-900 to-yellow-600 items-center flex-col flex-wrap border-black border-x-2 border-y-2 h-auto mx-auto max-w-sm w-full p-4 sm:w-1/2 rounded-md text-yellow-50 font-mono">
      <h1
        className="flex  text-yellow-50 text-l hover:underline cursor-pointer font-bold"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        {product.name}
      </h1>
      <img
        className="h-40 mt-4 hover:scale-90 cursor-pointer "
        onClick={() => navigate(`/products/${product.id}`)}
        src="https://m.media-amazon.com/images/I/717zDSCMKPL._AC_SX425_.jpg"
      />
      <h4 className="mt-4 ml-5 text-base font-mono">{product.description}</h4>
      <h3 className="mt-6 flex justify-center  ">${product.price}.00 </h3>

      <button
        className=" flex justify-center w-30 bg-yellow-50 hover:bg-yellow-200 hover:scale-95 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={async () => {
          try {
            await createOrderProduct({
              order_id: cart.id,
              product_id: product.id,
            });
            setError("");
          } catch (err) {
            setError(err.response.data.message);
          }
        }}
      >
        {" "}
        Add to Cart
      </button>
    </div>
  );
}
