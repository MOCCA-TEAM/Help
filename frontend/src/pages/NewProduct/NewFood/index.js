import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles.css';

import api from '../../../services/api';


export default function NewProduct(){
    
    const history = useHistory();

    const[category, setCategory] = useState('');
    const [product, setProduct] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [ntvalue, setNtvalue] = useState('');
    
    
    const petshopId = localStorage.getItem('petshopId');
    
    async function handleNewProduct(e){
        e.preventDefault();
        //Conexão com o banco de dados de Foods
        const dataFoods = {
            category,
            product,
            type,
            price,
            ntvalue,
        }
        try{
            await api.post('foods', dataFoods, {
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
                    <h1>Cadastrar no Produto</h1>

                </section>

                <form classname="formDasComidas" onSubmit = {handleNewProduct}>
                    <div classname="inputsDiv">
                            <input 
                            placeholder="Título do Produto" 
                            value = {category}
                            onChange={e => setCategory(e.target.value)}
                            />
                        </div>
                    <div classname="inputsDiv">
                        <input 
                        placeholder="Título do Produto" 
                        value = {type}
                        onChange={e => setType(e.target.value)}
                        />
                    </div>
                    
                    <div classname="inputsDiv">
                        <input 
                        placeholder = "Descrição" 
                        value = {product}
                        onChange = {e => setProduct(e.target.value)}
                        />
                    </div>
                    
                    <div classname="inputsDiv">
                        <input 
                        placeholder="Valor em Real" 
                        value = {price}
                        onChange = {e => setPrice(e.target.value)}
                        />
                    </div>

                    <div classname="inputsDiv">
                        <input 
                        placeholder="Valor nutricional" 
                        value = {ntvalue}
                        onChange = {e => setNtvalue(e.target.value)}
                        />
                    </div>
                    <button type = "submit">Cadastrar</button>
                </form>

            </div>
        </div>
    )

}
