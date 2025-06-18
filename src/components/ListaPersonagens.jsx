import React, { useEffect, useState } from "react";
import md5 from "blueimp-md5";
import "./ListaPersonagens.css";
import { Link } from "react-router-dom";

const CHAVE_PUBLICA = "1b56983c55c139fd96b4d5fe0c7ff754";
const CHAVE_PRIVADA = "07eee49f762237bd4f7da55c08d100e867c63b1f";

function ListaPersonagens() {
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [busca, setBusca] = useState("");

  useEffect(() => {
    async function buscarPersonagens() {
      setCarregando(true);
      setErro("");

      const ts = Date.now().toString();
      const hash = md5(ts + CHAVE_PRIVADA + CHAVE_PUBLICA);

      // URL base da API.
      let url = `https://gateway.marvel.com/v1/public/characters?limit=20&ts=${ts}&apikey=${CHAVE_PUBLICA}&hash=${hash}`;

      // Se o usuário digitou algo, adiciona filtro de busca na URL.
      if (busca.trim() !== "") {
        url += `&nameStartsWith=${encodeURIComponent(busca.trim())}`;
      }

      try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        const resultados = dados.data.results;

        if (resultados.length === 0) {
          setErro("Nenhum personagem encontrado.");
          setPersonagens([]);
        } else {
          setPersonagens(resultados);
        }
      } catch (e) {
        setErro("Erro ao buscar personagens. Tente novamente mais tarde.");
        setPersonagens([]);
      }

      setCarregando(false);
    }

    buscarPersonagens();
  }, [busca]);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="inputBusca"
      />

      {carregando ? (
        <p className="statusMensagem">Carregando heróis...</p>
      ) : erro ? (
        <p className="statusErro">{erro}</p>
      ) : (
        <div className="listaWrapper">
          <div className="listaPersonagens">
            {personagens.map((heroi) => (
              <Link to={`/detalhes/${heroi.id}`} className="linkPersonagem" key={heroi.id}>
                <div className="cardPersonagem">
                  <img
                    src={`${heroi.thumbnail.path}/standard_xlarge.${heroi.thumbnail.extension}`}
                    alt={heroi.name}
                  />
                  <h3>{heroi.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListaPersonagens;
