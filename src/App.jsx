import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import PostCard from "./components/PostCard";
import FiltroCategoria from "./components/FiltroCategoria";
import { BarLoader, SyncLoader } from "react-spinners";

function App() {
  const { isDark, setIsDark, theme } = useContext(ThemeContext);

  function UrlWeb(id) {
    return `https://picsum.photos/seed/${id}/400/300`;
  }

  const [photos, setPhotos] = useState([]);

  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPhotos([
        {
          id: 1,
          title: "O silêncio das montanhas",
          description:
            "Explorei trilhas que poucos conhecem e voltei transformado.",
          category: "natureza",
          img: UrlWeb(1),
        },
        {
          id: 2,
          title: "Café às 6 da manhã",
          description:
            "Existe uma magia específica no mundo antes de todo mundo acordar.",
          category: "cotidiano",
          img: UrlWeb(2),
        },
        {
          id: 3,
          title: "Por que larguei o emprego",
          description:
            "Não foi impulsivo. Foi a decisão mais calculada da minha vida.",
          category: "carreira",
          img: UrlWeb(3),
        },
        {
          id: 4,
          title: "Aprendi a cozinhar com 27 anos",
          description: "E descobri que comida é muito mais do que nutrição.",
          category: "gastronomia",
          img: UrlWeb(4),
        },
        {
          id: 5,
          title: "Viagem solo para o Nordeste",
          description:
            "Cada cidade uma história diferente, cada pessoa um universo.",
          category: "viagem",
          img: UrlWeb(5),
        },
        {
          id: 6,
          title: "Leituras que mudaram minha visão",
          description:
            "Três livros que me fizeram questionar tudo que eu achava que sabia.",
          category: "leitura",
          img: UrlWeb(6),
        },
        {
          id: 7,
          title: "O problema com as redes sociais",
          description:
            "Passei 30 dias sem Instagram e o que aprendi me surpreendeu.",
          category: "tecnologia",
          img: UrlWeb(7),
        },
        {
          id: 8,
          title: "Correr não é sobre velocidade",
          description:
            "Comecei a correr pra emagrecer e acabei encontrando meditação.",
          category: "esporte",
          img: UrlWeb(8),
        },
        {
          id: 9,
          title: "Minha cidade tem história demais",
          description:
            "Morava aqui há anos e não fazia ideia do que estava ao redor.",
          category: "cotidiano",
          img: UrlWeb(9),
        },
        {
          id: 10,
          title: "Aprender um idioma do zero",
          description:
            "Dicas reais de quem tentou, errou e finalmente conseguiu.",
          category: "educação",
          img: UrlWeb(10),
        },
        {
          id: 11,
          title: "Fotografia com celular",
          description:
            "Não é sobre o equipamento, é sobre o que você decide registrar.",
          category: "tecnologia",
          img: UrlWeb(11),
        },
        {
          id: 12,
          title: "A primeira vez que viajei de trem",
          description:
            "Lento, barato e a melhor decisão que tomei naquele verão.",
          category: "viagem",
          img: UrlWeb(12),
        },
        {
          id: 13,
          title: "Dormir bem mudou minha vida",
          description:
            "Não é exagero. Oito horas de sono fizeram o que nenhuma dieta fez.",
          category: "saúde",
          img: UrlWeb(13),
        },
        {
          id: 14,
          title: "Quando a ansiedade bate forte",
          description: "Aprendi a reconhecer os sinais antes de virar crise.",
          category: "saúde",
          img: UrlWeb(14),
        },
        {
          id: 15,
          title: "Meu primeiro projeto open source",
          description:
            "Contribuir pra comunidade foi mais simples do que eu imaginava.",
          category: "tecnologia",
          img: UrlWeb(15),
        },
        {
          id: 16,
          title: "Receita de pão que não falha",
          description:
            "Testei doze versões até chegar nessa. Você agradece depois.",
          category: "gastronomia",
          img: UrlWeb(16),
        },
        {
          id: 17,
          title: "Minimalismo na prática",
          description:
            "Não é sobre ter pouco, é sobre não deixar as coisas te possuírem.",
          category: "cotidiano",
          img: UrlWeb(17),
        },
        {
          id: 18,
          title: "Por que voltei a estudar",
          description:
            "Com 30 anos, voltei pra faculdade. Sem arrependimentos.",
          category: "educação",
          img: UrlWeb(18),
        },
        {
          id: 19,
          title: "Uma semana sem notícias",
          description:
            "O mundo continuou girando e eu fiquei muito mais tranquilo.",
          category: "cotidiano",
          img: UrlWeb(19),
        },
        {
          id: 20,
          title: "Escalada urbana nos fins de semana",
          description: "A cidade tem paredes e eu decidi usá-las.",
          category: "esporte",
          img: UrlWeb(20),
        },
      ]);
      setLoad(false);
    }, 2000);
  }, []);

  const [categoryActive, setCategoryActive] = useState(null);

  const postFiltered = categoryActive
    ? photos.filter((p) => p.category === categoryActive)
    : photos;

  const posts = postFiltered.map((p) => {
    return <PostCard key={p.id} post={p} />;
  });

  const categorias = [...new Set(photos.map((p) => p.category))];

  const category = categorias.map((categoria) => {
    return (
      <FiltroCategoria
        key={categoria}
        category={categoria}
        setCategoryActive={setCategoryActive}
        categoryActive={categoryActive}
      />
    );
  });

  return (
    <div className={`w-full min-h-screen ${theme.bg} transition-all`}>
      <Header />
      <div className="flex justify-center gap-5 pt-5">
        {load && (
          <div className="items-center">
            <BarLoader size={10} />
          </div>
        )}
        {category}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 p-5">
        {posts}
      </div>
    </div>
  );
}

export default App;
