// src/pages/DetalhesHerois.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import md5 from "blueimp-md5";
import "./DetalhesHerois.css";

const CHAVE_PUBLICA = "1b56983c55c139fd96b4d5fe0c7ff754";
const CHAVE_PRIVADA = "07eee49f762237bd4f7da55c08d100e867c63b1f";

function DetalhesHerois() {
  const { id } = useParams();
  const [heroi, setHeroi] = useState(null);
  const [erro, setErro] = useState("");
  const [favoritado, setFavoritado] = useState(false);

  useEffect(() => {
    async function buscarHeroi() {
      const ts = Date.now().toString();
      const hash = md5(ts + CHAVE_PRIVADA + CHAVE_PUBLICA);
      const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${CHAVE_PUBLICA}&hash=${hash}`;

      try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        const resultado = dados.data.results[0];
        setHeroi(resultado);

        // Verifica se já está favoritado
        const favoritos = JSON.parse(localStorage.getItem("favoritosMarvel")) || [];
        setFavoritado(favoritos.some((f) => f.id === resultado.id));
      } catch {
        setErro("Erro ao buscar detalhes.");
      }
    }

    buscarHeroi();
  }, [id]);

  function favoritarHeroi() {
    const favoritos = JSON.parse(localStorage.getItem("favoritosMarvel")) || [];

    // Evita duplicatas
    if (!favoritos.some((f) => f.id === heroi.id)) {
      favoritos.push({
        id: heroi.id,
        name: heroi.name,
        thumbnail: heroi.thumbnail,
      });
      localStorage.setItem("favoritosMarvel", JSON.stringify(favoritos));
      setFavoritado(true);
    }
  }

  if (erro) return <p className="statusErro">{erro}</p>;
  if (!heroi) return <p className="statusMensagem">Carregando detalhes...</p>;

  return (
    <div className="detalhesContainer">
      <div className="detalhesTitulo">
        <h1>{heroi.name}</h1>
        <img
          src={`${heroi.thumbnail.path}/portrait_uncanny.${heroi.thumbnail.extension}`}
          alt={heroi.name}
        />
      </div>

<div className="favoritarContainer">

      <button
  onClick={favoritarHeroi}
  className={`iconeCoracao ${favoritado ? "favoritado" : "nao-favoritado"}`}
  title={favoritado ? "Já favoritado" : "Clique para favoritar"}
>
  ❤
</button>

</div>

      <div className="bloco">
        <p className="descricao"><strong>Descrição:</strong> {heroi.description || "Sem descrição."}</p>
        <p className="dataCriacao"><strong>Data de criação:</strong> {new Date(heroi.modified).toLocaleDateString()}</p>
        <p className="hqDisponiveis"><strong>HQs disponíveis:</strong> {heroi.comics.available}</p>
        <p className="eventos"><strong>Eventos:</strong> {heroi.events.available}</p>
        <p className="series"><strong>Séries:</strong> {heroi.series.available}</p>
        <p className="historias"><strong>Histórias:</strong> {heroi.stories.available}</p>
      </div>
    </div>
  );
}

export default DetalhesHerois;
