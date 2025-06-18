import React, { useEffect, useState } from "react";
import "./Favoritos.css";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  // Carrega os heróis favoritados do localStorage ao abrir a página
  useEffect(() => {
    const salvos = localStorage.getItem("heroisFavoritos");
    if (salvos) {
      setFavoritos(JSON.parse(salvos));
    }
  }, []);

  // Remove um herói dos favoritos
  function desfavoritar(id) {
    const novosFavoritos = favoritos.filter(heroi => heroi.id !== id);
    setFavoritos(novosFavoritos);
    localStorage.setItem("heroisFavoritos", JSON.stringify(novosFavoritos));
  }

  // Se não há favoritos, mostra mensagem
  if (favoritos.length === 0) {
    return <p className="statusMensagem">Nenhum herói favoritado.</p>;
  }

  // Lista os heróis favoritados
  return (
    <div className="favoritosLista">
      <h2>Heróis Favoritados</h2>
      {favoritos.map(heroi => (
        <div key={heroi.id} className="favoritoCard">
          <img
            src={`${heroi.thumbnail.path}/portrait_small.${heroi.thumbnail.extension}`}
            alt={heroi.name}
            className="imagemFavorito"
          />
          <span>{heroi.name}</span>
          <button className="botaoFavorito" onClick={() => desfavoritar(heroi.id)}>
            Desfavoritar
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favoritos;