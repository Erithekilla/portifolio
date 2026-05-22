import Header from './components/Header.jsx';
import Presentation from './components/Presentation.jsx';
import ProjectsCarousel from './components/ProjectsCarousel.jsx';
import Projetos from './components/Projetos.jsx'
import Footer from './components/Footer.jsx'
import Contato from './components/Contato.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
