import "./Header.scss";
import instockLogo from "../../assets/Logo/InStock-Logo_2x.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <Link to='/'><img className="header__logo" src={instockLogo}></img></Link>
        <div className="header-buttons">
          <Link to='/' className={`header-buttons__bg-wh ${location.pathname === '/' ? 'active' : ''}`}>
            <p className={`header-buttons__text ${location.pathname === '/' ? 'header-buttons__text-active header-buttons__bg-wh--active' : ''}`}>Warehouses</p>
          </Link>
          <Link to='/inventories' className={`header-buttons__bg-inv ${location.pathname === '/inventories' ? 'active' : ''}`}>
            <p className={`header-buttons__text ${location.pathname === '/inventories' ? 'header-buttons__text-active header-buttons__bg-inv--active' : ''}`}>Inventory</p>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
