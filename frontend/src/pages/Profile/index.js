import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

export default function Profile(){
    const petshopName = localStorage.getItem('petshopName')

    return (
        <div classname="profile-container">
            <header>
                <span>Bem vinda, {petshopName} </span>

                <Link className="button" to="/product/new">Cadastrar novo produto</Link>
                <button type="button">
                    <FiPower size={18} />
                </button>
            </header>

            <h1>Itens Cadastrados</h1>

            <ul>
                <li>
                    <strong>ITEM:</strong>
                    <p>Item teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>PREÇO:</strong>
                    <p>R$200,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>ITEM:</strong>
                    <p>Item teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>PREÇO:</strong>
                    <p>R$200,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>ITEM:</strong>
                    <p>Item teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>PREÇO:</strong>
                    <p>R$200,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>ITEM:</strong>
                    <p>Item teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>PREÇO:</strong>
                    <p>R$200,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}