import React from 'react'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewProduct(){
    return (
        <div className="new-product-container">
            <div classname="content">
                <section>
                    <Link to="/">
                        <FiArrowLeft size="16"/>
                        Voltar
                    </Link>
                    <h1>Cadastrar novo produto</h1>
                </section>
                <form onSubmit={handleRegister}>
                    <div><input placeholder="Nome do PetShop" /></div>
                    <div><input type="text" placeholder="Descrição" /></div>
                    <div></div>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}