import './styles/App.css';
import Apresentacao from './components/apresentacao'
import Tecnologias from './components/tecnologias'


function App() {
  return (
    <div className="App">
      <header className="header" id="topo">
          <Apresentacao 
            titulo = "Portfólio de Vinicius Aragão" 
            className="Apresentacao"
          />
          <Apresentacao 
            subtitulo = "Estudante de Ciência da Computação, Fullstack Dev Junior" 
            className="Apresentacao"
          />
      </header>
      <div className="Tecnologias" id="tecnologias">
        <Tecnologias />
      </div>
      <div className="">

      </div>
    </div>
  );
}

export default App;
