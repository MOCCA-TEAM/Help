/*
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');*/
import React, { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

    
export default function Init(){
    //const history = useHistory();
    const [petshops, setPetshops] = useState([]);

     useEffect(()=> {
         api.get('petshops').then(response =>{setPetshops(response.data);} )
     });
    
    return (
        <div classname="profile-container">
            
            <h1>Petshops Cadastrados</h1>

            <ul>
               {petshops.map(petshop => (
               <li key={petshop.id}>
                    <strong>NOME DO PETSHPOP:</strong>
                    <p>{petshop.name}</p>
                    
                    <strong>DESCRIÇÃO:</strong>
                    <p>{petshop.description}</p>

                    <strong>CIDADE:</strong>
                    <p>{petshop.description}</p>

                    <strong>UF:</strong>
                    <p>{petshop.uf}</p>

                    <strong>EMAIL:</strong>
                    <p>{petshop.email}</p>

                    <strong>TELEFONE:</strong>
                    <p>{petshop.phone}</p>  
                    <br/><br/>
                </li>
                ))}
            </ul>
        </div>
    );
};


    /*async function handlePetshops(e){
        e.preventDefault();

        const dataPetshops = {
        name, description, city, uf, email, phone
       }
       try{
           await api.get('petshops', dataPetshops);
       }catch(err){
           
       }
       history.push('/init');
    }*/
    
    /*useEffect(() =>{
        api.get('inicial', {
            
        }).then(response =>{
            setPetshops(response.data);
        })
    }, []); */
    //{petshops.map(petshops => (