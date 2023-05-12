import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido =>', nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
        

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2> -------- Memorial de pessoas incríveis -------- </h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Nome de quem quer homenagear" valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto label="Menssagem" placeholder="Escreva algo legal sobre essa pessoa" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto label="Foto" placeholder="Foto da pessoa" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true} label="Caracteristica" itens={props.times} valor={props.time} aoAlterado={valor => setTime(valor)}></ListaSuspensa>
                <Botao>
                    Postar homenagem
                </Botao>
            </form>
        </section>
    )
}

export default Formulario