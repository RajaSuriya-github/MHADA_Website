import NavScrollExample from '../Navbar';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className="top-bar">
        <div className="contact-info">
         <div>
         <span className="icon">📞</span> Helpline No.: 022-66405000 | Lottery Helpline No.: 022-69468100
          </div> 
        </div>
        <div className="language-selector">
          EN <span className="arrow">▼</span>
        </div>
      
      </div>
      <NavScrollExample/>
      {/* <div className="main-nav">
        <div className="logo-title">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">About Us</a>
          <a href="#">Boards</a>
          <a href="#">Lottery Schemes</a>
          <a href="#">Applications</a>
          <a href="#">Results</a>
          <a href="#">News</a>
        </nav>
        <div className="right-section">
          <div className="search-icon">🔍</div>
          <button className="login-button">Login</button>
        </div>
      </div> */}
    </header>
  );
}

export default Header;
