/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import api from './services/api';
import './App.css';

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});

  async function handleBusca () {
    if (!cep) alert("Informe o CEP");

    try {
      const response = await api.get(`${cep}/json`);
      setEndereco(response.data);
    }
    catch {
      console.log('Erro ao buscar o CEP')
      setCep('');
    }    
  }

  return (
    <div className='container'>
      <h1 className='title'>Buscador de CEP</h1>
      <div className="containerInput">
        <input type="text" 
          placeholder='Digite seu CEP...'
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button className='btn' onClick={handleBusca}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {endereco?.cep && (
        <main className='main'>
          <h2>CEP: {cep}</h2>
          <span>{endereco.logradouro}</span>
          <span>Complemento: {endereco.complemento}</span>
          <span>{endereco.bairro}</span>
          <span>{endereco.localidade} / {endereco.uf}</span>
        </main>
      )}
    </div>
  )
}

export default App
