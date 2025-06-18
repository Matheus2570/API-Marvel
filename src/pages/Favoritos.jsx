import React, { useEffect, useState } from "react";
import "./Favoritos.css";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("heroisFavoritos") || "[]");
    setFavoritos(favs);
  }, []);

  function desfavoritar(id) {
    const novos = favoritos.filter(h => h.id !== id);
    localStorage.setItem("heroisFavoritos", JSON.stringify(novos));
    setFavoritos(novos);
  }

  if (favoritos.length == 0) {
    return <p className="statusMensagem">Nenhum herói favoritado.</p>;
  }

  return (
    <div className="favoritosLista">
      <h2>Heróis Favoritados</h2>
      {favoritos.map(heroi => (
        <div key={heroi.id} className="favoritoCard">
          <img
            src={`${heroi.thumbnail.path}/portrait_small.${heroi.thumbnail.extension}`}
            alt={heroi.name}
            style={{ borderRadius: "8px" }}
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