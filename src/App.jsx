import { FiSearch } from 'react-icons/fi';
import './App.css';

function App() {

  return (
    <div className='container'>
      <h1 className='title'>Buscador de CEP</h1>
      <div className="containerInput">
        <input type="text" 
          placeholder='Digite seu CEP...'
        />
        <button className='btn'>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 13041150</h2>
        <span>Rua aaa bbb</span>
        <span>Complemento: xxxxx</span>
        <span>Jardim xxxx</span>
        <span>Campinas - SP</span>
      </main>
    </div>
  )
}

export default App
