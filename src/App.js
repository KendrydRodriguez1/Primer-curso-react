import './App.css';
import { Testimonio } from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className="contendor-principal">
        <h1>Esto es lo que dicen los alumnos de frecode</h1>
        <Testimonio
          imagen="enma"
          alt= 'enma_testimonio'
          nombre="Kendryd Jonayker Rodriguez Ronquillo"
          cargo="Ing. Software"
          Testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
        <Testimonio
          imagen="sarah"
          alt= 'Sarah_testimonio'
          nombre="Sarah Chima in Nigeria          "
          cargo="Ing. Software"
          Testimonio="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        />
      </div>
    </div>
  );
}

export default App;
