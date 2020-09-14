import React from 'react'

import produtos from '../../Data/Produtos.js'

export default props =>{
    
    function getProdutosListItem() {
        return produtos.map(prod =>{
            return <li key={prod.id}>
                {prod.id} - {prod.nome} - {prod.descricao} - R$ {prod.preco} 
                </li>
        })
    }
    
    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}