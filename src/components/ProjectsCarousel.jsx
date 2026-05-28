import { useState } from 'react';
import CarouselButton from './CarouselButton.jsx';
import fratArc from '../../img/frat-arc.png';
import astrologia from '../../img/astrologia2.png';

const projects = [
  {
    image: fratArc,
    alt: 'Site Frat Arc',
    text: 'Site feito em React, design totalmente responsivo e personalizado para a estética do cliente.',
    link: 'https://fraternidade-arcana.vercel.app/',
  },
  {
    image: astrologia,
    alt: 'Site Astrologia',
    text: 'Sistema próprio totalmente funcional, feito em react, de astrologia, com correspondências planetárias, espíritos, etc.',
    link: 'https://erithekilla.github.io/kemet_website/#/astrologia',
  },
];

function ProjectsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function showPreviousSlide() {
    setCurrentSlide((slide) => (slide - 1 + projects.length) % projects.length);
  }

  function showNextSlide() {
    setCurrentSlide((slide) => (slide + 1) % projects.length);
  }

  return (
    <section className="sites" id="websites">
      <h2 className="title_projetos">MEUS PROJETOS - WEBSITES</h2>
      <div className="carrossel">
        <CarouselButton direction="anterior" label="Imagem anterior" onClick={showPreviousSlide} />
        <div
          className="carrossel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project) => (
            <div className="slide">
              <img key={project.alt} src={project.image} alt={project.alt} />
              <p>{project.text}</p>
              <p>Link: <a href={project.link} target="_blank">{project.alt}</a></p>
            </div>
          ))}
        </div>
        <CarouselButton direction="proximo" label="Proxima imagem" onClick={showNextSlide} />
      </div>
    </section>
  );
}

export default ProjectsCarousel;
