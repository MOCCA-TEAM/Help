import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles.css';

import api from '../../../services/api';


export default function NewProduct(){
    //Escolha
    // Variável de recurso
    const history = useHistory();

    //Variável que armazena a escolhar do select
    const [choice,setChoice] = useState('');

    //Variáveis que armazena os dados de Itens
    const[name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
   
    //Variáveis que armazena os dados de Foods
    const[category, setCategory] = useState('');
    const [product, setProduct] = useState('');
    const [type, setType] = useState('');
    const [priceFoods, setPricefoods] = useState('');
    const [ntvalue, setNtvalue] = useState('');
    
    
    const petshopId = localStorage.getItem('petshopId');
    
    function handleItens() {
        history.push('/');
    }

    async function handleNewProduct(e){
        e.preventDefault();
        // Conexão com o banco de dados de Itens
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

                    <Link to="/profile">
                        <FiArrowLeft size="16"/>
                        Voltar
                    </Link>
                    <h1>Cadastrar novo produto</h1>

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
                        value = {priceFoods}
                        onChange = {e => setPricefoods(e.target.value)}
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
