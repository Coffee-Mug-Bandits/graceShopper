export default function productCard({
  product,
  selectedUser,
  createOrderProduct,
}) {
  return (
    <div className="flex bg-gradient-to-t from-yellow-900 to-yellow-600 items-center flex-col flex-wrap border-black border-x-2 border-y-2 h-96 w-60 rounded-md text-yellow-50">
      <h2>{product.name}</h2>
      <img
        className="h-40 mt-4"
        src="https://m.media-amazon.com/images/I/717zDSCMKPL._AC_SX425_.jpg"
      />
      <h3 className="mt-4 ml-5">{product.description}</h3>
      <h3 className="mt-6">
        ${product.price}.00{" "}
        <button
          className="bg-blue-500 font-bold py-2 px-4 rounded"
          onClick={() => {
            createOrderProduct(selectedUser.id, product.id);
          }}
        >
          {" "}
          Add to Cart
        </button>
      </h3>
      <div></div>
    </div>
  );
}
