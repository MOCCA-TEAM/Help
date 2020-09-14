import './App.css'
import React from 'react'

import Primeiro from './Components/Basics/Primeiro'
import ComParametros from './Components/Basics/ComParametros'
import ComFilhos from './Components/Basics/ComFilhos'
import Card from './Components/Layout/Card'
import Repeticao from './Components/Basics/Repeticao'
import Condicional from './Components/Basics/Condicional'
import CondicionalComIf from './Components/Basics/CondicionalComIf'

export default props =>
    <div className="App">
        <Card titulo="#06 - Condicional V2.0">
            <CondicionalComIf  numero ={11}/>
        </Card>
        <Card titulo="#05 - Condicional V1.0">
            <Condicional  numero ={10}/>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao />
        </Card>
        <Card titulo="#03 - Componente Com Filhos">
            <ComFilhos>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ComFilhos> 
        </Card>
        <Card titulo="#02 - Componente Com Parametro">
            <ComParametros titulo ="Esse é o título"
            subtitulo ="Esse é o subtítulo" />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>
        
        {/* */}
        {/* 
        <ComParametros titulo = "Opa" subtitulo="Epa" /> */}
    </div> 