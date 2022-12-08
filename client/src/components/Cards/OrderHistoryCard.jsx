import { useNavigate } from "react-router-dom";
import useOrders from "../../hooks/useOrders";

export default function OrderHistoryCard() {
  const { orders } = useOrders();
  const navigate = useNavigate();
  return (
    <div>
      {orders?.map((order) => {
        console.log(order);
        return (
          <div>
            {order?.order_products?.map((op) => {
              return (
                <div>
                  <div className="text-3xl ml-44 font-semibold ">
                    Order #{Math.floor(Math.random() * 10000)}
                  </div>
                  <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                    <div class="flex flex-col justify-start items-start bg-gradient-to-t from-yellow-900 to-yellow-600 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                      <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                        <div class="pb-4 md:pb-8 w-full md:w-40">
                          <img
                            class="w-full hidden md:block border-amber-400 border-2 rounded-3xl hover:scale-90 cursor-pointer"
                            onClick={() =>
                              navigate(`/products/${op.products.id}`)
                            }
                            src={op.products.imageUrl}
                          />
                        </div>
                        <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                          <div class="w-full flex flex-col justify-start items-start space-y-8">
                            <h3
                              class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800 hover:underline cursor-pointer"
                              onClick={() =>
                                navigate(`/products/${op.products.id}`)
                              }
                            >
                              {op.products.name}
                            </h3>
                            <div class="flex justify-start items-start flex-col space-y-2"></div>
                          </div>
                          <div class="flex justify-between space-x-8 items-start w-full">
                            <p class="text-base dark:text-white xl:text-lg leading-6">
                              ${op.products.price}.00
                            </p>
                            <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                              {op.qty}
                            </p>
                            <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                              ${op.products.price * op.qty}.00
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>

    // <div>
    //   {orders?.map((order) => {
    //     console.log(order);
    //     return (
    //       <div>
    //         {order?.order_products?.map((op) => {
    //           return (
    //             <div>
    //               <img className="h-28" src={op.products.imageUrl} />
    //               <h2 className="p-4">{op.products.name}</h2>
    //               <h2 className="p-4">Price: ${op.products.price}.00</h2>
    //               <h2 className="self-auto">Qty: {op.qty}</h2>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     );
    //   })}
    // </div>
  );
}
