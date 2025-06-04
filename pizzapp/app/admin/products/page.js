'use client';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

export default function ProductsManage() {

    const [activeForm, setActiveForm]   = useState('add');
    const [name, setName]               = useState('');
    const [price, setPrice]             = useState('');
    const [id, setId]                   = useState('');

    const handleAddProduct = async (e) => {
         e.preventDefault();
        try{
           const response = await fetch('http://localhost:3001/products/',{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({name, price : parseFloat(price)})
           });

           if(!response.ok) {
               throw new Error('Erreur lors de l\'ajout du produit');
           }

           const data = await response.json();
           console.log("Porduit ajouter", data);
           alert('Produit ajouté avec succès');

           setName('');
           setPrice('');

        }catch (error) {
            console.error('Erreur lors de l\'ajout du produit:', error);
        }
    }

    const handleUpdateProcut = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch(`http://localhost:3001/products/${id}`, {
                method  : 'PUT',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({name, price : parseFloat(price)})
            });

            const data = await response.json();
            console.log('Produit modifier', data)
        }catch(error){
            console.log("Erreur lors de la modification du produit", error);
        }
    }

    return (
        <div>
            <div className={styles.container_admin}>
                <div className={`${styles.container} ${activeForm === 'edit' ? styles.containerEdit : styles.containerAdd}`}>
                    <div className={styles.switchButtons}>
                        <button onClick={() => setActiveForm('add')} className={styles.button_switch}>Ajouter un produit</button>
                        <button onClick={() => setActiveForm('edit')} className={styles.button_switch}>Modifier un produit</button>
                    </div>

                    {activeForm === 'add' && (
                        <form className={styles.formAdd} onSubmit={handleAddProduct}>
                            <h2>Ajouter un produit</h2>
                            <input type="text" placeholder="Nom du produit" value={name} onChange={(e) => setName(e.target.value)}/>
                            <input type="number" placeholder="Prix" value={price} onChange={(e) => setPrice(e.target.value)} />
                            <button type="submit" className={styles.button_submit}>Ajouter</button>
                        </form>
                    )}

                    {activeForm === 'edit' && (
                        <form className={styles.formUpdate} onSubmit={handleUpdateProcut}>
                            <h2>Modifier un produit</h2>
                            <input type="text" placeholder="ID du produit" value={id} onChange={(e) => setId(e.target.value)}/>
                            <input type="text" placeholder="Nouveau nom" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="number" placeholder="Nouveau prix" value={price} onChange={(e) => setPrice(e.target.value)}  />
                            <button type="submit" className={styles.button_submit}>Modifier</button>
                        </form>
                    )}
                </div>
            </div>

        </div>
    );
}