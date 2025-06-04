import styles from "./cardProduct.module.css";

export default function CardProduct({ product }) {
    return (
        <div className={styles.productCard}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>{product.price} €</strong></p>
            <button className={styles.addToCartButton}>Ajouter au panier</button>
        </div>
    );
}