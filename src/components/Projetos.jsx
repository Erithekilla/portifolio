import frat from '../../img/frat-arc.png'
import Astrologia from './Astrologia.jsx'

function Projetos(){
    return (
        <section className='projetos' id='websites'>
            <h1 className='title_projetos'>MEUS PROJETOS - WEBSITES</h1>
            <div className='fraternidade_arc'>
                <h2>Fraternidade Arcana</h2>
                <img src={frat} alt='Site da Fraternidade Arcana' />
                <p>Site feito em React, design totalmente responsivo e personalizado para a estética do cliente.</p>
                <p>Link: <a href="https://fraternidade-arcana.vercel.app/" target="_blank">Clique-me!</a></p>
            </div>
            <div className='like_a_br'></div>
            <div className='astrologia'>
                <h2>Sistema de Astrologia</h2>
                <div className='astro'><Astrologia /></div>
                <p>Sistema próprio totalmente funcional, feito em react, de astrologia, com correspondências planetárias, espíritos, etc.</p>
                <p>Link: <a href="https://erithekilla.github.io/kemet_website/#/astrologia" target="_blank">Clique-me!</a></p>
            </div>
        </section>
    )
}

export default Projetos