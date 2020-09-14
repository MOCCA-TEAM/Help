import React from 'react'

/*export default () =>
    <>
        <h3>Título</h3>
        <p>subtítulo</p>

    </>:*/

/*export default param =>
    <>
        <h3>{param.titulo}</h3>
        <p>{array(10).fill(0)}</p>
        <p>{param.subtitulo}</p>
    </>*/

export default props =>
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
    </>

