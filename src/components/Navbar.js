import { iconData, navData } from "../data";

import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {navData.map(nav => {
            return (
              <li key={nav.id}>
                <a href={`#${nav.name}`} rel="noreferrer" className="nav-link"> {nav.name} </a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          {iconData.map(icon => {
            return (
              <li key={icon.id}>
                <a href="https://www.twitter.com" rel="noreferrer" target="_blank" className="nav-icon"
                  ><i className={icon.name}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar