import'./style.css';
function App() {
  return (
    <div className="container">
     <h1 className="title">Buscador de Cep</h1>
      <div className="container-input">
        <input type="text" placeholder="Digite seu cep..." />
        <button className="buttonSearch">
      <i class="fas fa-search"></i>
      </button>
      </div>
      
      <main>
        <h2>Cep:541224112</h2>   
        
        <span>Rua seila da onde</span>
        <span>complemento:algum</span>
        <span>Vila creuza</span>
        <span>Itapevi-SP</span>
      </main>
    </div>
    
  );
}

export default App;
