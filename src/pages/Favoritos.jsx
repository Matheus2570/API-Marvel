import  { useState, useEffect } from "react";
import "./botaoCurtir.css"; 

// Componente que exibe o número de curtidas e permite ao usuário curtir
const Curtidas = ({ chaveLocalStorage }) => {   //Props
  // Estado que armazena o número de curtidas
  const [curtidas, setCurtidas] = useState(0);

  // Efeito que é executado quando o componente é montado ou atualizado
  useEffect(() => {
    // Recupera o número de curtidas salvo no localStorage
    const curtidaSalva = localStorage.getItem(chaveLocalStorage);
    if (curtidaSalva) {
      // Atualiza o estado com o número de curtidas salvo
      setCurtidas(parseInt(curtidaSalva));
    }
  }, [chaveLocalStorage]);

  // Função que é executada quando o usuário clica no botão de curtir
  const handleCurtir = () => {
    // Incrementa o número de curtidas
    const novaCurtida = curtidas + 1;
    // Atualiza o estado com o novo número de curtidas
    setCurtidas(novaCurtida);
    // Salva o novo número de curtidas no localStorage
    localStorage.setItem(chaveLocalStorage, novaCurtida);
  };

  // Retorna o JSX que exibe o botão de curtir e o número de curtidas
  return (
    <div className='botaoContainer'>
      <button className='botaoCurtir' onClick={handleCurtir}>👍 Curtir</button>
      <span style={{ marginLeft: "10px" }}>{curtidas} curtidas</span>
    </div>
  );
};

export default Curtidas;