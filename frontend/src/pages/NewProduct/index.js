import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function NewProduct(){

    const history = useHistory();
    //redirecionamento para cadastro de itens
    function handleItens() {
        history.push('/newitem');
    }
    //redirecionamento para cadastro de foods
    function handleFoods() {
        history.push('/newfood');
    }
    return (
        <div className="new-product-container">
             <section classname='headers'>

                    <Link to="/profile">
                        <FiArrowLeft size="16"/>
                        Voltar
                    </Link>

                </section>

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
