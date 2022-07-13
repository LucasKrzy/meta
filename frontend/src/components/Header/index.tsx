import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="Meta" />
            <h1>Meta</h1>
            <p>
              Desenvolvido por &nbsp;
              <a href="https://github.com/LucasKrzy">@LucasKrzy</a>
            </p>
        </div>
    </header>
    )
}

export default Header;
