import React, { useState, useEffect } from 'react';

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
            
            <h1>Petshops Cadastrados</h1>

            <ul>
               {petshops.map(petshops => (
               <li>
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

                    <strong>DESCRIPTION:</strong>
                    <p>{petshops.description}</p>

                    <strong>WHATSAPP:</strong>
                    <p>{petshops.whatsapp}</p>
                </li>
                ))} 
            </ul>
        </div>
    );
};