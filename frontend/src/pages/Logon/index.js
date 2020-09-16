import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

export default function Logon(){
    var [id, setId] = useState('');
    var history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            var response = await api.post('sessions', { id });
            alert(`Petshop: ${response.data.name}`);

            localStorage.setItem('petshopId', id);
            localStorage.setItem('petshopName', response.data.name);

           // history.push('/register'); //temporario enquanto não faz tela de perfil
            history.push('/profile');//falta criar a rota do perfil
        }
        catch(err){
            alert('Falha no LogIn, tente novamente!');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Logon</h1>
                    <div><input placeholder="Sua ID" value={id} onChange={ e => setId(e.target.value)} /></div>
                    <div> <button type="submit">Entrar</button></div>
                    <Link to="/register">
                        <FiLogIn size={16}/>
                        Não Tenho Cadastro</Link>
                </form>
            </section>
        </div>
    );
}