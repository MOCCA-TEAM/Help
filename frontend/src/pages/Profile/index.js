import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Profile(){
    const [products, setProducts] = useState([]);
    const [productsf, setProductsf] = useState([]);

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

    useEffect(() =>{
        api.get('foods', {
            headers: {
                Authorization: petshopId,
            }
        }).then(response =>{
            setProductsf(response.data);
        })
    }, [petshopId]); 

    async function handleDeleteItem(id){
        try{
            await api.delete(`itens/${id}`, {
                headers: {
                    Authorization: petshopId,
                }
            });
            setProducts(products.filter(product => product.id !== id))
        }catch(err){
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    async function handleDeleteFood(id){
        try{
            await api.delete(`foods/${id}`, {
                headers: {
                    Authorization: petshopId,
                }
            });
            setProductsf(productsf.filter(product => product.id !== id))
        }catch(err){
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/login');
    }

    return (
        <div classname="profile-container">
            <header>
                <span>Bem vinda, {petshopName} </span>

                <Link className="button" to="/product">Cadastrar novo produto</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} />
                </button>
            </header>

            <h1>Produtos Cadastrados</h1>
            <div>
            <ul>
               {products.map(produc => (
               <li key ={produc.id}>
                    <strong>PRODUTO:</strong>
                    <p>{produc.name}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{produc.description}</p>

                    <strong>PREÇO:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(produc.price)}</p>

                    <button onClick={() => handleDeleteItem(produc.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                ))} 
            </ul>
            </div>
            <div>
            <ul>
               {productsf.map(produc => (
               <li key ={produc.id}>
                    <strong>PRODUTO:</strong>
                    <p>{produc.product}</p>

                    <strong>TIPO:</strong>
                    <p>{produc.type}</p>

                    <strong>CATEGORIA:</strong>
                    <p>{produc.category}</p>

                    <strong>VALOR NUTRITIVO:</strong>
                    <p>{produc.ntvalue}</p>

                    <strong>PREÇO:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(produc.price)}</p>

                    <button onClick={() => handleDeleteFood(produc.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                ))} 
            </ul>
            </div>
        </div>
    );
};
/*

            <div>
            <ul>
               {products.map(produc => (
               <li key ={produc.id}>
                   
                    <strong>PRODUTO:</strong>
                    <p>{produc.product}</p>

                    <strong>CATEGORIA:</strong>
                    <p>{produc.category}</p>

                    <strong>TIPO:</strong>
                    <p>{produc.type}</p>

                    <strong>VALOR NUTRITIVO:</strong>
                    <p>{produc.ntvalue}</p>

                    <strong>PREÇO:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(produc.price)}</p>

                    <button onClick={() => handleDeleteProduct(produc.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                ))} 
            </ul>
            </div>
*/