import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';


export default function NewProduct(){
    //Escolha
    const list = [
        {id: 1, name: 'select 1'},
        {id: 2, name: 'select 2'},
        {id: 3, name: 'select 3'},
        {id: 4, name: 'select 4'},
      ];

    const [choice,setChoice] = useState('');

    const[name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    
    
    const history = useHistory();
    
    const petshopId = localStorage.getItem('petshopId');
    
    async function handleNewProduct(e){
        e.preventDefault();
        const data = {
            name,
            description,
            price,
        }
        try{
            await api.post('itens', data, {
                headers: {
                    Authorization: petshopId,
                }
            })
        } catch(err){
            alert('Erro ao cadastrar caso, tente novamente.')
        }
        history.push('/profile');
    }
    return (
        <div className="new-product-container">

            <div classname="content">

                <section classname='headers'>

                    <Link to="/profile">
                        <FiArrowLeft size="16"/>
                        Voltar
                    </Link>
                    <h1>Cadastrar novo produto</h1>

                </section>

                {/* Escolha oque você quer cadastrar*/}
                <select value={choice} onChange={e => setChoice(e.target.value)}>
                    <option>Cadastrar:</option>
                    <option value='Aqui era para estar o form para cadastrar os itens'> Item </option>
                    <option value='Aqui era para estar o form para cadastrar as rações'> Ração </option>
                </select>
                  <div>{choice}</div>

                <form classname="inputs" onSubmit = {handleNewProduct}>
                    <div classname="inputsDiv">
                        <input 
                        placeholder="Título do Produto" 
                        value = {name}
                        onChange={e => setName(e.target.value)}
                        />
                    </div>
                    
                    <div classname="inputsDiv">
                        <input 
                        placeholder = "Descrição" 
                        value = {description}
                        onChange = {e => setDescription(e.target.value)}
                        />
                    </div>
                    
                    <div classname="inputsDiv">
                        <input 
                        placeholder="Valor em Real" 
                        value = {price}
                        onChange = {e => setPrice(e.target.value)}
                        />
                    </div>
                    
                    <button type = "submit">Cadastrar</button>
                </form>

            </div>
        </div>
    )

}
