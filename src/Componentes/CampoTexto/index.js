import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {

    //case de concatenação
        const PropsModificadas = `${props.labe}....${props.placeholder}`
        //let valor = ''
        //Ao inves de usar uma simples variavel iremos utilizar um rot
        //variavel de estados do react

        const [valor, setValor] = useState('')

        const aoDigitado = (evento) => {
//            setValor(evento.target.value)
//            console.log(valor)
            props.aoAlterado(evento.target.value)
        }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>

        </div>
    )
}

export default CampoTexto