import styles from "./cartProduct.module.css";

export default function CartProduct({ product, setSelectedProducts }) {
  const handleRemove = () => {
    setSelectedProducts(prev => prev.filter(p => p.id !== product.id));
  };

  return (
    <div className={styles.cartProductCard}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>{product.price} €</strong></p>
      <button className={styles.removeFromCartButton} onClick={handleRemove}>
        Retirer du panier
      </button>
    </div>
  );
}