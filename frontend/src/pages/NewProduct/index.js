import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

export default function NewProduct(){
    //Escolha
    // Variável de recurso
    const history = useHistory();
    function handleItens() {
        history.push('/product/new/item');
    }
    function handleFoods() {
        history.push('/product/new/food');
    }
    return (
        <div className="new-product-container">

            <div classname="content">

                <section classname='headers'>
                <h1>Oque deseja cadastrar?</h1>
                <Link className="button" to="/product/new/item">Cadastrar novo produto</Link>
                <button  onClick={handleFoods}>Rações</button>
                    
                </section>
            </div>
        </div>
    )

}
