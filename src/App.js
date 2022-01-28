import './style.css';
import { useState } from 'react';
import api from './services/api';
function App() {
  const [input, setInput] = useState('');
  const [ cep, setCep ] = useState({});

  async function handleSearch() {
      //01310930 /json/
    if (input === '') {
      alert("preencha algum cep!")
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("erro ao buscar aqui!")
      setInput("");
    }
    }

  return (
    <div className="container">
     <h1 className="title">Buscador de Cep</h1>
      <div className="container-input">
        <input type="text" placeholder="Digite seu cep..." value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="buttonSearch" onClick={handleSearch}>
          <i class="fas fa-search"></i>
        </button>
      </div>
      

      {Object.keys(cep).length > 0 && (
        <main>
          <h2>Cep: {cep.cep}</h2>
        
          <span>{cep.logradouro }</span>
          <span>complemento:{cep.complemento }</span>
          <span>{cep.bairro }</span>
          <span>{cep.localidade}-{ cep.uf}</span>
        </main>
      )}
     
    </div>
    
  );
}

export default App;
