'use client';
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import styles from "./page.module.css";
import CardProduct from "../components/cardProduct";


export default function Commands() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3001/products');
                const data = await response.json();
                setProducts(data);
                console.log('Produits:', data);
            } catch (error) {
                console.error('Erreur produits:', error);
            }
        };

        fetchProducts();
    }, []);


    return (
        <div>
            <Navbar />
            <div className={styles.contain_one}>
                <div className={styles.container_name}>
                    <p>AFFICHAGE EN ATTENTE D'IDEE</p>
                </div>
            </div>

            <div className={styles.contain_two}>
                <div className={styles.test}>
                    <div className={styles.contain_cards}>
                        {products.map(product => (
                            <CardProduct key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                <div className={styles.myCard}>
                    <div className={styles.cartTitle}>
                        <h1>Mon panier</h1>
                    </div>

                </div>
            </div>

        </div>
    )
}