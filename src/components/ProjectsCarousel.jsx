import { useState } from 'react';
import CarouselButton from './CarouselButton.jsx';
import fratArc from '../../img/frat-arc.png';
import astrologia from '../../img/astrologia.png';

const projects = [
  {
    image: fratArc,
    alt: 'Site Frat Arc',
  },
  {
    image: astrologia,
    alt: 'Site Astrologia',
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
    <section className="sites" id="sites">
      <h2>OS MELHORES SITES</h2>
      <div className="carrossel">
        <CarouselButton direction="anterior" label="Imagem anterior" onClick={showPreviousSlide} />
        <div
          className="carrossel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project) => (
            <img key={project.alt} src={project.image} alt={project.alt} />
          ))}
        </div>
        <CarouselButton direction="proximo" label="Proxima imagem" onClick={showNextSlide} />
      </div>
    </section>
  );
}

export default ProjectsCarousel;
