import './miniFooterPaginas.css';

function FooterPaginas({ link1, link2, link3, link4, link5 }) {
  return (
    <footer className="footerzin">
      <div className="footer-containerzin">

        <div className="footer-linkszin">
          <ul>
            <li>
               <a href={link1} target="_blank" rel="noreferrer">Condições de Uso</a>
            </li>
          </ul>
        </div>


        <div className="footer-linkszin">
          <ul>
            <li>
              <a href={link2} target="_blank" rel="noreferrer">Politica de Privacidade</a>
            </li>
          </ul>
        </div>


        <div className="footer-linkszin">
          <ul>
            <li>
              <a href={link3} target="_blank" rel="noreferrer">Acordo de licença</a>
            </li>
          </ul>
          </div>


          <div className="footer-linkszin">
          <ul>
              <li>
              <a href={link4} target="_blank" rel="noreferrer">Política de consumo no Brasil</a>
            </li>
          </ul>
          </div>


          <div className="footer-linkszin">
          <ul>
              <li>
              <a href={link5} target="_blank" rel="noreferrer">Anúncios</a>
            </li>
          </ul>
          </div>

           <div className="footer-linkszin">
          <ul>
             <li>
             <p>@Grupo5-2025</p>
            </li>
          </ul>
          </div>
          
        </div>
        
      
     
    </footer>
  );
}

export default FooterPaginas;
