import { useState } from "react";
import Banner from "./Componentes/Banner/Banner";
import Formulario from "./Componentes/Formulario";
import Time from "./Componentes/Time";

function App() {

  const times = [
    {
      nome: 'Amigo',
      corPrimaria: '#57C278',
      corSegundaria: '#D9F7E9'
    },
    {
      nome: 'Engraçado',
      corPrimaria: '#82CFFA',
      corSegundaria: '#E8F8FF'
    },
    {
      nome: 'Inteligente',
      corPrimaria: '#E06869',
      corSegundaria: '#FDE7E8'
    },
    {
      nome: 'Aventureiro',
      corPrimaria: '#DB6EBF',
      corSegundaria: '#FAE9F5'
    },
    {
      nome: 'Festeiro',
      corPrimaria: '#FFBA05',
      corSegundaria: '#FFE5D9'
    },
    {
      nome: 'Paizao',
      corPrimaria: '#FF8A29',
      corSegundaria: '#FFEEDF'
    },
    {
      nome: 'Amoroso',
      corPrimaria: '#A6D157',
      corSegundaria: '#F0F8E2'
    },

  ]


  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSegundaria={time.corSegundaria}
       colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
    </div>
  );
}

export default App;
