import './styles/App.css';
import Apresentacao from './components/apresentacao'
import Tecnologias from './components/tecnologias'
import Bibliografia from './components/bibliografia';
import { ScrollToTop } from './components/scrollToTop'

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <header className="header" id="topo">
        <Apresentacao
          titulo="Portfólio de Vinicius Aragão"
          className="Apresentacao"
        />
        <Apresentacao
          subtitulo="Estudante de Ciência da Computação, Fullstack Dev Junior"
          className="Apresentacao"
        />
        <p id='bottom-header'>$ --version: 1.2</p>
      </header>
      <div className="Tecnologias" id="tecnologias">
        <Tecnologias />
      </div>
      <div className="Bibliografia">
        <Bibliografia />
      </div>
    </div>
  );
}

export default App;
