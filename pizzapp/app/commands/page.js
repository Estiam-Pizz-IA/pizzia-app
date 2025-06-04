'use client';
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import styles from "./page.module.css";
import CardProduct from "../components/cardProduct";
import { Package } from "lucide-react";
import { Button, Grid, Typography } from "@mui/material";
import Cart from "../components/cart";

export default function Commands() {

    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);

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

    function handleOrder() {
        const payload = {
            pizzaIDs: selectedProducts.map(product => product.id)
        };

        try {
            fetch('http://localhost:3001/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }).then(() => {
                setSelectedProducts([]);
                alert('Commande passée avec succès !');
            });
        } catch (error) {
            console.error('Erreur lors de la commande:', error);
        }
    }


    return (
        <div>
            <Navbar />
            <div className={styles.contain_one}>
                <div className={styles.container_name}>
                    {selectedProducts.length > 0 ? (
                        <div className={styles.cart_container}>
                            <Cart selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
                        </div>
                    ) : (
                        <Grid className={styles.empty_state}>
                            <Package size={50} />
                            <Typography fontWeight={600}>
                                Aucune commande trouvée
                            </Typography>
                        </Grid>
                    )}
                </div>
            </div>

            <Button
                sx={{
                    backgroundColor: '#fab55a',
                    color: '#ffff',
                    ml: '20px',
                }}
                variant="contained"
                disabled={selectedProducts.length === 0}
                onClick={handleOrder}
            >
                Passer une commande
            </Button>

            <div className={styles.contain_two}>
                <div className={styles.container}>
                    <div className={styles.contain_cards}>
                        {products.map(product => (
                            <CardProduct key={product.id} product={product} setSelectedProducts={setSelectedProducts} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}