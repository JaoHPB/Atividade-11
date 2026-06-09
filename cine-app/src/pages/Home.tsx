import { useState } from 'react';
import { FILMES } from '../data/filmes';
import CartaoFilme from '../components/CartaoFilme';

function Home() {
  // MISSÃO 1: criar estado 'busca' (string, começa vazio)
    const [busca, setBusca] = useState<string>("");


  // MISSÃO 2: filtrar FILMES pelo título usando .filter()
  // Dica: filme.titulo.toLowerCase().includes(busca.toLowerCase())
    const filmesFiltrados = FILMES.filter((filme) =>
    filme.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="pagina-home">
      <h1>Filmes</h1>

      {/* MISSÃO 3: input controlado para a busca */}
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="🔍 Buscar filme..."
        className="campo-busca"
      />

      {/* MISSÃO 4: renderizar filmesFiltrados com CartaoFilme + key */}
      <div className="grid-filmes">
        {filmesFiltrados.map((filme) => (
          <CartaoFilme
            key={filme.id}
            filme={filme}
          />
        ))}
      </div>

      <p className="contagem">
        {filmesFiltrados.length} filme(s) encontrado(s)
      </p>
    </div>
  );
}

export default Home;