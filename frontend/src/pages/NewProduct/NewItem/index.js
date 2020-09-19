import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles.css';

import api from '../../../services/api';


export default function NewProduct(){
    // Variável de recurso
    const history = useHistory();

    //Variáveis que armazena os dados de Itens
    const[name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    
    const petshopId = localStorage.getItem('petshopId');
    
    async function handleNewProduct(e){
        e.preventDefault();
        // Conexão com o banco de dados de Itens

        const datat = {
            name,
            description,
            price,
        }
        try{
            await api.post('itens', datat, {
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

                    <Link to="/product">
                        <FiArrowLeft size="16"/>
                        Voltar
                    </Link>
                    <h1>Cadastrar novo Item</h1>

                </section>

                  <form classname="formDosItens" onSubmit = {handleNewProduct}>
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
