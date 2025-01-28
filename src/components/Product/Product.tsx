import { ProductName, ProductWrapper } from "./styles";
import { ProductProps } from "./types";

function Product({ productName = "Unknown", productPrice }: ProductProps) {
  return (
    <ProductWrapper>
      <ProductName>{productName}</ProductName>
      {productPrice !== undefined && <div>{productPrice} $</div>}
    </ProductWrapper>
  );
}

export default Product;
