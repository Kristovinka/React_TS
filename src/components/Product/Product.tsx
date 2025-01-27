import { MainProduct } from "./styles";
import { ProductProps } from "./types";

function Product({ name, price }: ProductProps) {
  return (
    <MainProduct>
      <h3>{name}</h3>
      <p>Цена: ${price.toFixed(2)}</p>
    </MainProduct>
  );
}

export default Product;
