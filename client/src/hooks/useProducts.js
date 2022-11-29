import { useStoreState, useStoreActions } from "easy-peasy";

export default function useProducts() {
  const createProduct = useStoreActions(
    (actions) => actions.products.createProduct
  );
  const products = useStoreState((state) => state.products.data);

  const fetchProducts = useStoreActions((actions) => {
    console.log(actions);
    return actions.products.fetchProducts;
  });
  const selectedProduct = useStoreState(
    (state) => state.products.selectedProduct
  );
  const fetchProduct = useStoreActions(
    (actions) => actions.products.fetchProduct
  );
  const editProduct = useStoreActions(
    (actions) => actions.products.editProduct
  );
  return {
    selectedProduct,
    fetchProduct,
    fetchProducts,
    createProduct,
    editProduct,
    products,
  };
}
