import { iconData } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <li>
          <a href="#home" rel="noreferrer" className="footer-link">home</a>
        </li>
        <li>
          <a href="#about" rel="noreferrer" className="footer-link">about</a>
        </li>
        <li>
          <a href="#services" rel="noreferrer" className="footer-link">services</a>
        </li>
        <li>
          <a href="#featured" rel="noreferrer" className="footer-link">featured</a>
        </li>
      </ul>
      <ul className="footer-icons">
        {iconData.map(icon => {
          return (
            <li key={icon.id}>
              <a href="https://www.twitter.com" rel="noreferrer" target="_blank" className="footer-icon"
                ><i className={icon.name}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer