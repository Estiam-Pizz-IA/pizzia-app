import styles from "./cart.module.css";
import CartProduct from "./cartProduct";

export default function Cart({ selectedProducts, setSelectedProducts }) {

  return (
    <div className={styles.cart_container}>
      {selectedProducts.map((product, index) => (
        <CartProduct key={index} product={product} setSelectedProducts={setSelectedProducts} />
      ))}
    </div>
  );
}