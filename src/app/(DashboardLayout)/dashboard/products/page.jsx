import ManageProducts from "@/components/Dashboard/ManageProducts/ManageProducts";
import { getAllProducts } from "@/action/server/products";

const ProductsPage = async () => {
  const products = await getAllProducts();
  
  return (
    <div>
      <ManageProducts initialProducts={products} />
    </div>
  )
}

export default ProductsPage;