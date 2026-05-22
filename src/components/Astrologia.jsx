import { useState, useEffect } from 'react'
import styles from './Astrologia.module.css'

const planetas = {
    Sol: {
        simbolo: '☉',
        classe: 'sol',
        deuses: 'Ra, Helios, Apollo',
        daemons: 'Sorath',
        diaTitulo: 'Energia do Dia do Sol',
        diaDescricao: 'Dia de brilho, honra, identidade e forca pessoal. Excelente para objetivos que envolvem autoridade, sucesso, visibilidade e autoconfianca.',
        favorece: 'lideranca, autoestima, fama, clareza, vitalidade',
        evitar: 'orgulho, arrogancia, querer dominar tudo',
        horaTitulo: 'Energia da Hora do Sol',
        horaDescricao: 'Um impulso direto de energia e presenca. Ideal para se expor, iniciar projetos, pedir reconhecimento, se impor com firmeza.'
    },
    Lua: {
        simbolo: '☽',
        classe: 'lua',
        deuses: 'Khonsu, Isis, Selene, Artemis',
        daemons: 'Hasmodai / Chasmodai',
        diaTitulo: 'Energia do Dia da Lua',
        diaDescricao: 'Dia emocional, intuitivo e ligado a familia, memorias e protecao. Muito forte para cura emocional, espiritualidade, sonhos e sensibilidade.',
        favorece: 'intuicao, fertilidade, cuidado, acolhimento, magia psiquica',
        evitar: 'instabilidade emocional, nostalgia excessiva, indecisao',
        horaTitulo: 'Energia da Hora da Lua',
        horaDescricao: 'Aumenta a percepcao e a receptividade. Boa para orar, meditar, fazer tarot, sonhar lucido, trabalhar emocoes e conexao espiritual.'
    },
    Marte: {
        simbolo: '♂',
        classe: 'marte',
        deuses: 'Horus, Sekhmet, Ares, Mars',
        daemons: 'Barzabel / Bartzabel',
        diaTitulo: 'Energia do Dia de Marte',
        diaDescricao: 'Dia de acao, coragem e confronto. Ideal para forca fisica, disciplina, luta, competitividade e cortar obstaculos.',
        favorece: 'treinos, decisoes rapidas, enfrentar medo, romper limites',
        evitar: 'agressividade, brigas, impulsividade',
        horaTitulo: 'Energia da Hora de Marte',
        horaDescricao: 'Um pico de energia explosiva. Boa para atacar tarefas dificeis, resolver pendencias, ter iniciativa e cortar vicios.'
    },
    Mercurio: {
        simbolo: '☿',
        classe: 'mercurio',
        deuses: 'Thoth, Hermes, Mercury',
        daemons: 'Taphthartharath',
        diaTitulo: 'Energia do Dia de Mercurio',
        diaDescricao: 'Dia mental, comunicativo e rapido. Otimo para estudos, negocios, escrita, conversas e inteligencia estrategica.',
        favorece: 'aprendizado, vendas, networking, tecnologia, planejamento',
        evitar: 'ansiedade mental, excesso de pensamentos, enganacao',
        horaTitulo: 'Energia da Hora de Mercurio',
        horaDescricao: 'Periodo de foco mental e agilidade. Ideal para estudar, programar, negociar, mandar mensagens importantes e organizar ideias.'
    },
    Jupiter: {
        simbolo: '♃',
        classe: 'jupiter',
        deuses: 'Amun, Zeus, Jupiter',
        daemons: 'Hismael',
        diaTitulo: 'Energia do Dia de Jupiter',
        diaDescricao: 'Dia de expansao, crescimento e prosperidade. Muito ligado a sorte, riqueza, fe, justica e oportunidades.',
        favorece: 'dinheiro, bencaos, crescimento espiritual, viagens, autoridade positiva',
        evitar: 'exageros, preguica, arrogancia moral',
        horaTitulo: 'Energia da Hora de Jupiter',
        horaDescricao: 'Aumenta o magnetismo e as oportunidades. Boa para pedir ajuda, fazer rituais de prosperidade, abrir caminhos e estudar temas elevados.'
    },
    Venus: {
        simbolo: '♀',
        classe: 'venus',
        deuses: 'Hathor, Astarte, Aphrodite, Venus',
        daemons: 'Kedemel',
        diaTitulo: 'Energia do Dia de Venus',
        diaDescricao: 'Dia de amor, beleza, prazer e harmonia. Excelente para relacionamentos, autoestima, arte, atracao e magnetismo.',
        favorece: 'romance, carisma, estetica, amizades, reconciliacao',
        evitar: 'dependencia emocional, luxuria, gastos excessivos',
        horaTitulo: 'Energia da Hora de Venus',
        horaDescricao: 'Um momento de charme e suavidade. Ideal para conversas amorosas, seducao, rituais de atracao, autocuidado e arte.'
    },
    Saturno: {
        simbolo: '♄',
        classe: 'saturno',
        deuses: 'Geb, Osiris, Cronus, Saturn',
        daemons: 'Zazel',
        diaTitulo: 'Energia do Dia de Saturno',
        diaDescricao: 'Dia de estrutura, responsabilidade e disciplina. Perfeito para trabalho serio, maturidade, limites e construcao a longo prazo.',
        favorece: 'foco, organizacao, estudo profundo, protecao, banimento, paciencia',
        evitar: 'pessimismo, isolamento, frieza emocional',
        horaTitulo: 'Energia da Hora de Saturno',
        horaDescricao: 'Energia pesada e concentrada. Boa para fechar ciclos, cortar habitos ruins, fazer limpeza espiritual, trabalhar limites e obrigacoes.'
    }
}

const diasPlanetarios = [
    { texto: 'Dia do Sol', planeta: 'Sol' },
    { texto: 'Dia da Lua', planeta: 'Lua' },
    { texto: 'Dia de Marte', planeta: 'Marte' },
    { texto: 'Dia de Mercurio', planeta: 'Mercurio' },
    { texto: 'Dia de Jupiter', planeta: 'Jupiter' },
    { texto: 'Dia de Venus', planeta: 'Venus' },
    { texto: 'Dia de Saturno', planeta: 'Saturno' }
]

const ordemHorarioP = ['Saturno', 'Jupiter', 'Marte', 'Sol', 'Venus', 'Mercurio', 'Lua']
const ordemPlanetaria = [3, 6, 2, 5, 1, 4, 0]

function getHorarioPlanetario(date){
    const diaSemana = date.getDay()
    const hora = date.getHours()
    const indiceRegente = ordemPlanetaria[diaSemana]
    const planetaIndex = (indiceRegente + hora) % 7

    return ordemHorarioP[planetaIndex]
}

function Astrologia(){
    const [dataAtual,setDataAtual] = useState(new Date())

    useEffect(()=>{
        const timer = setInterval(()=>{
            setDataAtual(new Date())
        }, 1000)

        return ()=> clearInterval(timer)
    }, [])

    const horaDoPlaneta = getHorarioPlanetario(dataAtual)
    const horaF = dataAtual.toLocaleTimeString('pt-BR')
    const diaSemanaLong = dataAtual.toLocaleDateString('pt-BR', { weekday: 'long'})
    const diaInfo = diasPlanetarios[dataAtual.getDay()]

    const planetaHora = planetas[horaDoPlaneta] || planetas.Sol
    const planetaDia = planetas[diaInfo.planeta] || planetas.Sol

    return(
        <section className={styles.astrologia}>
            <div className={styles.title}>
                <h1>Astrologia</h1>
            </div>
            <div className={styles.horarios}>
                <p>{horaF}</p>
                <p className={styles['planeta-info']}>
                    {diaSemanaLong}
                    <span className={`${styles['planeta-simbolo']} ${styles[planetaDia.classe]}`}>
                        {planetaDia.simbolo}
                    </span>
                </p>
                <p className={styles['planeta-info']}>
                    {diaInfo.texto}
                    <span className={`${styles['planeta-simbolo']} ${styles[planetaDia.classe]}`}>
                        {planetaDia.simbolo}
                    </span>
                </p>
                <p className={styles['planeta-info']}>
                    Horario de: {horaDoPlaneta}
                    <span className={`${styles['planeta-simbolo']} ${styles[planetaHora.classe]}`}>
                        {planetaHora.simbolo}
                    </span>
                </p>
            </div>

            <div className={styles['correspondencias-card']}>
                <div className={styles['correspondencia-item']}>
                    <span className={styles['energia-label']}>Deuses regentes</span>
                    <strong>{planetaDia.deuses}</strong>
                </div>
                <div className={styles['correspondencia-item']}>
                    <span className={styles['energia-label']}>Daemons planetarios</span>
                    <strong>{planetaDia.daemons}</strong>
                </div>
            </div>

            <div className={styles['energia-card']}>
                <h2 className={`${styles['energia-titulo']} ${styles[planetaDia.classe]}`}>
                    {planetaDia.simbolo} {planetaDia.diaTitulo}
                </h2>
                <p className={styles['energia-desc']}>{planetaDia.diaDescricao}</p>
                <div className={styles['energia-grid']}>
                    <div className={styles['energia-item']}>
                        <span className={styles['energia-label']}>Favorece:</span>
                        <span>{planetaDia.favorece}</span>
                    </div>
                    <div className={styles['energia-item']}>
                        <span className={styles['energia-label']}>Evitar:</span>
                        <span>{planetaDia.evitar}</span>
                    </div>
                </div>
            </div>

            <div className={styles['energia-card']}>
                <h2 className={`${styles['energia-titulo']} ${styles[planetaHora.classe]}`}>
                    {planetaHora.simbolo} {planetaHora.horaTitulo}
                </h2>
                <p className={styles['energia-desc']}>{planetaHora.horaDescricao}</p>
            </div>
        </section>
    )
}

export default Astrologia
