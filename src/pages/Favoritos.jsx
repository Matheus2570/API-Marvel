import React, { useEffect, useState } from "react"; 
import "./Favoritos.css"; 

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]); // Estado para armazenar os heróis favoritados

  // Carrega os heróis favoritados do localStorage ao abrir a página
  useEffect(() => {
    const salvos = localStorage.getItem("favoritosMarvel"); // Busca os favoritos salvos no localStorage
    if (salvos) {
      setFavoritos(JSON.parse(salvos)); // Se existir, converte de string para array e atualiza o estado
    }
  }, []); // Executa apenas uma vez ao montar o componente

  // Função para remover um herói dos favoritos
  function desfavoritar(id) {
    const novosFavoritos = favoritos.filter(heroi => heroi.id !== id); // Remove o herói pelo id
    setFavoritos(novosFavoritos); // Atualiza o estado
    localStorage.setItem("favoritosMarvel", JSON.stringify(novosFavoritos)); // Atualiza o localStorage
  }

  // Se não há favoritos, mostra mensagem
  if (favoritos.length === 0) {
    return <p className="statusMensagem">Nenhum herói favoritado.</p>; // Mensagem caso a lista esteja vazia
  }

  // Renderiza a lista de heróis favoritados
  return (
    <div className="favoritosLista">
      <h2>Heróis Favoritados</h2>
      {favoritos.map(heroi => ( // Para cada herói favoritado
        <div key={heroi.id} className="favoritoCard">
          <img
            src={`${heroi.thumbnail.path}/portrait_small.${heroi.thumbnail.extension}`} // Mostra a imagem do herói
            alt={heroi.name} // Texto alternativo com o nome
            className="imagemFavorito"
          />
          <span>{heroi.name}</span> {/* Mostra o nome do herói */}
          <button
            className="botaoFavorito"
            onClick={() => desfavoritar(heroi.id)} // Ao clicar, remove dos favoritos
            title="Desfavoritar"
          >
            Desfavoritar 💔
          </button>
        </div>
      ))}
    </div>
  );
}

export default Favoritos;