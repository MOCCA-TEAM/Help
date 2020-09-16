import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Profile(){
    const [products, setProducts] = useState([]);

    const history = useHistory();
    const petshopId = localStorage.getItem('petshopId');
    const petshopName = localStorage.getItem('petshopName');

    useEffect(() =>{
        api.get('profile', {
            headers: {
                Authorization: petshopId,
            }
        }).then(response =>{
            setProducts(response.data);
        })
    }, [petshopId]); 

    async function handleDeleteProduct(id){
        try{
            await api.delete(`products/${id}`, {
                headers: {
                    Authorization: petshopId,
                }
            });
            setProducts(products.filter(product => product.id !== id))
        }catch(err){
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div classname="profile-container">
            <header>
                <span>Bem vinda, {petshopName} </span>

                <Link className="button" to="/product/new">Cadastrar novo produto</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} />
                </button>
            </header>

            <h1>Produtos Cadastrados</h1>

            <ul>
               {products.map(product => (
               <li key ={product.id}>
                    <strong>ITEM:</strong>
                    <p>{product.name}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{product.description}</p>

                    <strong>PREÇO:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.price)}</p>

                    <button onClick={() => handleDeleteProduct(product.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                ))} 
            </ul>
        </div>
    );
};