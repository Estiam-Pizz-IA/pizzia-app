'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function ordersManager(){

    const [activeForm, setActiveForm] = useState('');

    return(
        <div className={styles.container_orders}>
            <div className={styles.container_dt_forms}>
                <div className={styles.dt}></div>
                <div className={styles.forms}>
                    <div className={styles.switchButtons}>
                        <button onClick={() => setActiveForm('update')}></button>
                        <button onClick={() => setActiveForm('delete')}></button>
                    </div>

                    {activeForm === 'update' &&(
                        <form className={styles.formUpdate}>
                            <h2>Modifier une commande</h2>
                            <input type="text" placeholder='Id de la commande'></input>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}