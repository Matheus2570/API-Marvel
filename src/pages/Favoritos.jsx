import { useState, useEffect } from "react";
import "./Favoritos.css";

const Favoritos = ({ chaveLocalStorage }) => {
  const [favoritado, setFavoritado] = useState(false);

  useEffect(() => {
    const salvo = localStorage.getItem(chaveLocalStorage);
    setFavoritado(salvo === "true");
  }, [chaveLocalStorage]);

  const alternarFavorito = () => {
    const novoFavorito = !favoritado;
    setFavoritado(novoFavorito);
    localStorage.setItem(chaveLocalStorage, novoFavorito);
  };

  return (
    <div className='botaoContainer'>
      <button className='botaoFavorito' onClick={alternarFavorito}>
        {favoritado ? "💔 Desfavoritar" : "💗 Favoritar"}
      </button>
<span className="contadorCurtidas" style={{ marginLeft: "10px" }}>
  {favoritado ? "1 Curtida" : "0 Curtidas"}
</span>
    </div>
  );
};

export default Favoritos;