export default function productCard({ product }) {
  return (
    <div className="flex bg-gradient-to-t from-yellow-900 to-yellow-600 items-center flex-col flex-wrap border-black border-x-2 border-y-2 h-80 w-60 rounded-md text-yellow-50">
      <h2>{product.name}</h2>
      <img
        className="h-40 mt-4"
        src="https://m.media-amazon.com/images/I/717zDSCMKPL._AC_SX425_.jpg"
      />
      <h3 className="mt-4 ml-5">{product.description}</h3>
      <h3 className="mt-6">${product.price}.00</h3>
    </div>
  );
}
