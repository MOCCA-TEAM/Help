import React from 'react'
import { useHistory } from 'react-router-dom';

import './styles.css';

export default function NewProduct(){
    const history = useHistory();
    function handleItens() {
        history.push('/newItem');
    }
    function handleFoods() {
        history.push('/newFood');
    }
    return (
        <div className="new-product-container">

            <div classname="content">

                <section classname='headers'>
                <h1>Oque deseja cadastrar?</h1>
                <button  onClick={handleItens}>Itens</button>
                <button  onClick={handleFoods}>Rações</button>
                    
                </section>
            </div>
        </div>
    )

}
