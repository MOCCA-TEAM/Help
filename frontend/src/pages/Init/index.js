import React, { useState, useEffect } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Init(){
    const [petshops, setPetshops] = useState([]);

    
    useEffect(() =>{
        api.get('inicial', {
            
        }).then(response =>{
            setPetshops(response.data);
        })
    }, []); 

    return (
        <div classname="profile-container">
            <header>
            <Link className="button" to="/login">LogIn
                <button type="button">
                    <FiLogIn size={18} />
                </button>
            </Link>
            </header>

            <h1>Petshops Cadastrados</h1>

            <ul>
               {petshops.map(petshops => (
               <li key={petshops.id}>
                    <strong>NOME DO PETSHPOP:</strong>
                    <p>{petshops.name}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{petshops.description}</p>

                    <strong>CITY:</strong>
                    <p>{petshops.city}</p>

                    <strong>UF:</strong>
                    <p>{petshops.uf}</p>

                    <strong>EMAIL:</strong>
                    <p>{petshops.email}</p>

                    <strong>WHATSAPP:</strong>
                    <p>{petshops.whatsapp}</p>
                    
                </li>
                ))} 
            </ul>
        </div>
    );
};