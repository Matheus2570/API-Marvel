import  { useState, useEffect } from "react";
import "./Favoritos.css"; 

// Componente que exibe o número de curtidas e permite ao usuário curtir
const Favoritos = ({ chaveLocalStorage }) => {   
  // Estado que armazena o número de curtidas
  const [favoritos, setFavoritos] = useState(0);

  // Efeito que é executado quando o componente é montado ou atualizado
  useEffect(() => {
    // Recupera o número de curtidas salvo no localStorage
    const favoritoSalvo = localStorage.getItem(chaveLocalStorage);
    if (favoritoSalvo) {
      // Atualiza o estado com o número de curtidas salvo
      setFavoritos(parseInt(favoritoSalvo));
    }
  }, [chaveLocalStorage]);

  // Função que é executada quando o usuário clica no botão de curtir
  const Favoritar = () => {
    // Incrementa o número de curtidas
    const novoFavorito = favoritos + 1;
    // Atualiza o estado com o novo número de curtidas
    setFavoritos(novoFavorito);
    // Salva o novo número de curtidas no localStorage
    localStorage.setItem(chaveLocalStorage, novoFavorito);
  };

  // Retorna o JSX que exibe o botão de curtir e o número de curtidas
  return (
    <div className='botaoContainer'>
      <button className='botaoCurtir' onClick={Favoritar}>💗 Favoritar</button>
      <span style={{ marginLeft: "10px" }}>{favoritos} curtidas</span>
    </div>
  );
};

export default Favoritos;