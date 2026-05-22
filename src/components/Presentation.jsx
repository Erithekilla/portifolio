import ProfileBox from './ProfileBox.jsx';
import {useState, useEffect} from 'react'

const palavras = ['Web-Designer', 'Game-Dev', 'YouTuber', 'Software Developer']
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&"

function Presentation() {
  const [indice, setIndice] = useState(0)
  const [text, setText] = useState(palavras[0])

  useEffect(()=>{

    let inter
    const timeout = setTimeout(()=>{
      const proxPalavra = palavras[(indice + 1) % palavras.length]

      let rodada = 0

      inter = setInterval(()=>{
        const newText = proxPalavra.split('').map((letra,i)=>{
          if(i < rodada){
            return letra
          }
          return chars[Math.floor(Math.random() * chars.length)]
        }).join('')

        setText(newText)
        rodada += 0.5

        if(rodada >= proxPalavra.length){
          clearInterval(inter)
          setText(proxPalavra)
          setIndice((indiceAtual) => (indiceAtual + 1) % palavras.length)
        }
      },45)
      

    }, 1000)

    return () => {
      clearInterval(inter)
      clearTimeout(timeout)
    }
  }, [indice])

  return (
    <section className="apresentacao">
      <div className="titulo">
        <h1>ERICK</h1>
        <p className='palavras'>{text}</p>
      </div>
      <div className="resumo">
        <ProfileBox />
      </div>
    </section>
  );
}

export default Presentation;
