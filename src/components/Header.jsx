import logoAnkh from '../../img/cruzank3.png';
import { useState } from 'react'
const navItems = ['WebSites', 'GameDev', 'YouTube', 'Contato'];

function Header() {
  const [aberto, setAberto] = useState(false)

  return (
    <header>
      <img src={logoAnkh} alt="Logo Cruz Ankh" />

      <button className="btn_header" type="button" onClick={()=> setAberto(!aberto)}>
        {aberto ? 'X' : 'Menu'}
      </button>

      <nav className={`navbar ${aberto ? 'ativo' : ''}`} aria-label="Navegacao principal">
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
