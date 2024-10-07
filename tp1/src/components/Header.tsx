import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="pure-menu pure-menu-horizontal">
        <ul className='pure-mnu-list'>
            <li className='pure-menu-item'>
            <Link to="/" className='pure-menu-link'>Inicio</Link>
            </li>
            <li className='pure-menu-item'>
            <Link to="/projects" className='pure-menu-link'>Proyectos</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;