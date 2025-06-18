import './footerPaginas.css';

function FooterPaginas({ link1, link2, link3, link4, link5, link6, link7, link8, link9 }) {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-links">
          <ul>
            <li>
            </li>
            <li>
              <a href={link1} target="_blank" rel="noreferrer">About Marvel</a>
            </li>
            <li>
              <a href={link2} target="_blank" rel="noreferrer">Help/FAQs</a>
            </li>
            <li>
              <a href={link3} target="_blank" rel="noreferrer">Internships</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>
            </li>
            <li>
              <a href={link4} target="_blank" rel="noreferrer">Advertising</a>
            </li>
            <li>
              <a href={link5} target="_blank" rel="noreferrer">Disney+</a>
            </li>
            <li>
              <a href={link6} target="_blank" rel="noreferrer">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>
            </li>
            <li>
              <a href={link7} target="_blank" rel="noreferrer">Marvelhq.com</a>
            </li>
            <li>
              <a href={link8} target="_blank" rel="noreferrer">Redeem Digital</a>
            </li>
            <li>
              <a href={link9} target="_blank" rel="noreferrer">Comics</a>
            </li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <div className="contact-item">
            <strong>Email:</strong> grupo5marvel@gmail.com
          </div>
          <div className="contact-item">
            <strong>Telefone:</strong> (11) 99999-9999
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPaginas;
