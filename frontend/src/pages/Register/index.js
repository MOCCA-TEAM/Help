import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

export default function Register(){
    var [name, setName] = useState('');
    var [description, setDescription] = useState('');
    var [email, setEmail] = useState('');
    var [phone, setPhone] = useState('');
    var [city, setCity] = useState('');
    var [uf, setUf] = useState('');

    var history = useHistory();
    
    async function handleRegister(e){ //Faz cadastro do usuario
        e.preventDefault();
        var data = {
            name,
            description, 
            email,
            phone,
            city,
            uf,
        };

        try{          
            var response = await api.post('petshops', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/'); //envia para pagina inicial apos criar conta
        } 
        catch(err) {
            alert('Erro no cadastro, tente novamente!');
        }
    }
    return (
        <div className="register-container">
            <section>
                <Link to="/">
                    <FiArrowLeft size="16"/>
                    Tela Inicial
                </Link>
                <h1>Cadastrar</h1>
            </section>
            <form onSubmit={handleRegister}>
                <div><input placeholder="Nome do PetShop" value={name} onChange={ e=> setName(e.target.value) }/></div>
                <div><input type="text" placeholder="Descrição" value={description} onChange={ e=> setDescription(e.target.value) }/></div>
                <div><input type="email" placeholder="E-mail" value={email} onChange={ e=> setEmail(e.target.value) }/></div>
                <div><input placeholder="Telefone" value={phone} onChange={ e=> setPhone(e.target.value) }/></div>
                <div className="input-group">
                    <input placeholder="Cidade" style={{width: 143}} value={city} onChange={ e=> setCity(e.target.value) }/>
                    <input placeholder="UF" style={{width: 30}} value={uf} onChange={ e=> setUf(e.target.value) }/>
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}