import logoAnkh from '../../img/cruz2.png';

const navItems = ['WebSites', 'GameDev', 'YouTube', 'Contato'];

function Header() {
  return (
    <header>
      <img src={logoAnkh} alt="Logo Cruz Ankh" />
      <nav className="navbar" aria-label="Navegacao principal">
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
