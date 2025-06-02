'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function OrdersManager() {
  const [activeForm, setActiveForm] = useState('update');
  const [orderId, setOrderId] = useState('');
  const [pizzaId, setPizzaId] = useState('');
  const [pizzaName, setPizzaName] = useState('');
  const [pizzaPrice, setPizzaPrice] = useState('');

  const [deleteOrder, setDeleteOrder] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault(); 

    try {
      const res = await fetch(`http://localhost:3001/orders/${orderId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pizzaID: pizzaId,
          name: pizzaName,
          price: parseFloat(pizzaPrice)
        })
      });

      if (res.ok) {
        alert("Pizza modifiée avec succès !");
      } else {
        const err = await res.json();
        alert('Erreur : ' + (err.message?.details || 'Erreur inconnue'));
      }
    } catch (error) {
      alert('Erreur : ' + error.message);
    }
  };

  const handleDelete = async(e) => {
    e.preventDefault();

    try{
        const res = await fetch(`http://localhost:3001/orders/${deleteOrder}`, {
            method: 'DELETE'
        });

        if(res.ok){
            alert("Commande supprimée");
            setDeleteOrder('');
        }
    }catch(error) {
        alert("Erreur : " + error.message );
    }
  }

  return (
    <div className={styles.container_orders}>
      <div className={styles.container_dt_forms}>
        <div className={styles.dt}></div>
         <div className={`${styles.forms} ${activeForm === 'update' ? styles.formUpdateDynamique : styles.formDeleteDynamique}`}>
          <div className={styles.switchButtons}>
            <button type="button" onClick={() => setActiveForm('update')}>Modifier</button>
            <button type="button" onClick={() => setActiveForm('delete')}>Supprimer</button>
          </div>

          {activeForm === 'update' && (
            <form className={styles.formUpdate} onSubmit={handleUpdate}>
              <h2>Modifier une commande</h2>
              <input type="text" placeholder='ID de la commande' value={orderId} onChange={(e) => setOrderId(e.target.value)} />
              <input type="text" placeholder='ID de la pizza' value={pizzaId} onChange={(e) => setPizzaId(e.target.value)} />
              <input type="text" placeholder='Nouveau nom' value={pizzaName} onChange={(e) => setPizzaName(e.target.value)} />
              <input type="text" placeholder='Nouveau prix' value={pizzaPrice} onChange={(e) => setPizzaPrice(e.target.value)} />
              <button type="submit">Modifier</button>
            </form>
          )}

          {activeForm === 'delete' && (
            <form className={styles.formDelete} onSubmit={handleDelete}>
              <h2>Supprimer une commande</h2>
              <input type="text" placeholder='ID de la commande' value={deleteOrder} onChange={(e) => setDeleteOrder(e.target.value)}/>
              <button type="submit">Supprimer</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
