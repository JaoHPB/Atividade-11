import { useParams, useNavigate } from 'react-router-dom';
import { FILMES } from '../data/filmes';

function DetalheFilme() {
  // MISSÃO 1: ler o 'id' da URL com useParams
  // const { id } = useParams<{ id: string }>();
    const { id } = useParams<{ id: string }>();


  // MISSÃO 2: usar useNavigate para o botão voltar
  // const navigate = useNavigate();
    const navigate = useNavigate();

  // MISSÃO 3: encontrar o filme no array FILMES pelo id
  // Dica: FILMES.find(f => f.id === Number(id))
  // const filme = ...
     const filme = FILMES.find(
    (f) => f.id === Number(id)
  );

  // MISSÃO 4: se não encontrar, exibir mensagem de erro
  if (!filme) {
    return <p>Filme não encontrado.</p>;
  }

  return (
    <div className="pagina-detalhe">
      {/* MISSÃO 5: botão voltar com navigate(-1) */}
      <button onClick={() => navigate(-1)}>← Voltar</button>

      <div className="detalhe-conteudo">
        <div className="detalhe-capa">🎞️</div>
        <div className="detalhe-info">
          {/* MISSÃO 6: exibir titulo, ano, genero, duracao e sinopse */}
          <h1>{filme.titulo}</h1>
          <p>{filme.ano} · {filme.genero} · {filme.duracao} min</p>
          <p className="sinopse">{filme.sinopse}</p>
        </div>
      </div>
    </div>
  );
}

export default DetalheFilme;