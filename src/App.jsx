import Header from './components/Header.jsx';
import Presentation from './components/Presentation.jsx';
import ProjectsCarousel from './components/ProjectsCarousel.jsx';
import Projetos from './components/Projetos.jsx'
import Footer from './components/Footer.jsx'
import Contato from './components/Contato.jsx'
import Gamedev from './components/Gamedev.jsx'
import Youtube from './components/Youtube.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <section className='wallp'>
          <ProjectsCarousel />
          <Gamedev />
          <Youtube />
          <Contato />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
