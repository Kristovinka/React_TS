import "./styles.css";
import { ProductProps } from "./types";

function Product({ name, price }: ProductProps) {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Цена: ${price.toFixed(2)}</p>
    </div>
  );
}

export default Product;
