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
          context:
            "Foi numa manhã fria de julho que decidi subir sozinho. Sem GPS, sem guia, apenas uma mochila e a vontade de desaparecer por alguns dias. O que encontrei lá no alto não foi silêncio — foi clareza.",
          category: "natureza",
          img: UrlWeb(1),
        },
        {
          id: 2,
          title: "Café às 6 da manhã",
          description:
            "Existe uma magia específica no mundo antes de todo mundo acordar.",
          context:
            "Comecei o hábito por acidente, num dia que não consegui dormir. Hoje acordo cedo de propósito. Aquela hora pertence só a mim — sem notificações, sem obrigações, só o vapor do café e os próprios pensamentos.",
          category: "cotidiano",
          img: UrlWeb(2),
        },
        {
          id: 3,
          title: "Por que larguei o emprego",
          description:
            "Não foi impulsivo. Foi a decisão mais calculada da minha vida.",
          context:
            "Passei seis meses planejando a saída. Guardei dinheiro, estudei as alternativas, conversei com pessoas que fizeram o mesmo. Quando finalmente pedi demissão, a única coisa que senti foi alívio.",
          category: "carreira",
          img: UrlWeb(3),
        },
        {
          id: 4,
          title: "Aprendi a cozinhar com 27 anos",
          description: "E descobri que comida é muito mais do que nutrição.",
          context:
            "A pandemia me jogou na cozinha por necessidade. O que começou como sobrevivência virou ritual. Hoje cozinhar é o momento em que mais consigo desligar a cabeça.",
          category: "gastronomia",
          img: UrlWeb(4),
        },
        {
          id: 5,
          title: "Viagem solo para o Nordeste",
          description:
            "Cada cidade uma história diferente, cada pessoa um universo.",
          context:
            "Comprei a passagem sem planejar nada além do destino. Cada cidade me levou pra próxima. Conheci pessoas que nunca vou esquecer e lugares que o Google Maps nem sabe que existem.",
          category: "viagem",
          img: UrlWeb(5),
        },
        {
          id: 6,
          title: "Leituras que mudaram minha visão",
          description:
            "Três livros que me fizeram questionar tudo que eu achava que sabia.",
          context:
            "Não eram livros de autoajuda. Eram filosofia, ciência e ficção científica. Os três juntos me fizeram perceber que a maioria das certezas que eu tinha eram só hábitos de pensamento.",
          category: "leitura",
          img: UrlWeb(6),
        },
        {
          id: 7,
          title: "O problema com as redes sociais",
          description:
            "Passei 30 dias sem Instagram e o que aprendi me surpreendeu.",
          context:
            "No primeiro dia fiquei abrindo o celular sem querer, por reflexo. Na segunda semana percebi que tinha mais tempo do que imaginava. No final do mês não sentia falta — sentia distância.",
          category: "tecnologia",
          img: UrlWeb(7),
        },
        {
          id: 8,
          title: "Correr não é sobre velocidade",
          description:
            "Comecei a correr pra emagrecer e acabei encontrando meditação.",
          context:
            "Nos primeiros meses olhava só pro ritmo e pro peso. Depois comecei a deixar o fone em casa. Foi aí que entendi que correr era a única hora do dia em que minha mente ficava quieta.",
          category: "esporte",
          img: UrlWeb(8),
        },
        {
          id: 9,
          title: "Minha cidade tem história demais",
          description:
            "Morava aqui há anos e não fazia ideia do que estava ao redor.",
          context:
            "Um amigo me desafiou a fazer um passeio de dois dias pela própria cidade como se fosse turista. Descobri museus, ruínas e histórias que nunca teriam chamado minha atenção no dia a dia.",
          category: "cotidiano",
          img: UrlWeb(9),
        },
        {
          id: 10,
          title: "Aprender um idioma do zero",
          description:
            "Dicas reais de quem tentou, errou e finalmente conseguiu.",
          context:
            "Tentei três vezes antes de conseguir. O erro era sempre o mesmo: querer aprender tudo antes de falar. Quando parei de ter vergonha de errar, o idioma começou a fazer sentido.",
          category: "educação",
          img: UrlWeb(10),
        },
        {
          id: 11,
          title: "Fotografia com celular",
          description:
            "Não é sobre o equipamento, é sobre o que você decide registrar.",
          context:
            "Perdi horas pesquisando câmeras antes de perceber que as fotos que mais gosto foram tiradas com celular. A diferença não estava no equipamento — estava em onde eu estava olhando.",
          category: "tecnologia",
          img: UrlWeb(11),
        },
        {
          id: 12,
          title: "A primeira vez que viajei de trem",
          description:
            "Lento, barato e a melhor decisão que tomei naquele verão.",
          context:
            "O avião me levaria em duas horas. O trem levou doze. E nessas doze horas vi paisagens, conversei com estranhos e cheguei descansado. Nunca mais viajei com pressa.",
          category: "viagem",
          img: UrlWeb(12),
        },
        {
          id: 13,
          title: "Dormir bem mudou minha vida",
          description:
            "Não é exagero. Oito horas de sono fizeram o que nenhuma dieta fez.",
          context:
            "Fui cético por muito tempo. Dormia mal e achava que era normal. Quando finalmente levei o sono a sério — horário fixo, quarto escuro, sem tela — tudo mudou em duas semanas.",
          category: "saúde",
          img: UrlWeb(13),
        },
        {
          id: 14,
          title: "Quando a ansiedade bate forte",
          description: "Aprendi a reconhecer os sinais antes de virar crise.",
          context:
            "Por anos confundi ansiedade com preguiça ou fraqueza. Quando entendi o que estava acontecendo no meu corpo, consegui criar estratégias antes de chegar no limite.",
          category: "saúde",
          img: UrlWeb(14),
        },
        {
          id: 15,
          title: "Meu primeiro projeto open source",
          description:
            "Contribuir pra comunidade foi mais simples do que eu imaginava.",
          context:
            "Fiquei meses achando que não era bom o suficiente. Quando finalmente abri um PR, era uma correção pequena. Mas ver meu nome no histórico do projeto foi uma sensação que não esperava.",
          category: "tecnologia",
          img: UrlWeb(15),
        },
        {
          id: 16,
          title: "Receita de pão que não falha",
          description:
            "Testei doze versões até chegar nessa. Você agradece depois.",
          context:
            "O primeiro ficou cru por dentro. O quarto ficou duro demais. O nono ficou bom mas sem graça. Na décima segunda tentativa entendi que pão é paciência, e paciência é prática.",
          category: "gastronomia",
          img: UrlWeb(16),
        },
        {
          id: 17,
          title: "Minimalismo na prática",
          description:
            "Não é sobre ter pouco, é sobre não deixar as coisas te possuírem.",
          context:
            "Doei metade do que tinha num fim de semana. Achei que ia sentir falta. Senti leveza. O minimalismo não me fez diferente — me fez mais eu mesmo.",
          category: "cotidiano",
          img: UrlWeb(17),
        },
        {
          id: 18,
          title: "Por que voltei a estudar",
          description:
            "Com 30 anos, voltei pra faculdade. Sem arrependimentos.",
          context:
            "Todos acharam estranho. Eu era o mais velho da sala no primeiro semestre. Mas também era o mais focado, porque sabia exatamente por que estava ali.",
          category: "educação",
          img: UrlWeb(18),
        },
        {
          id: 19,
          title: "Uma semana sem notícias",
          description:
            "O mundo continuou girando e eu fiquei muito mais tranquilo.",
          context:
            "Comecei como experimento. Sete dias sem abrir portal de notícias, sem checar manchetes. O mundo não parou. Eu é que pude respirar.",
          category: "cotidiano",
          img: UrlWeb(19),
        },
        {
          id: 20,
          title: "Escalada urbana nos fins de semana",
          description: "A cidade tem paredes e eu decidi usá-las.",
          context:
            "Comecei numa academia de boulder por curiosidade. Em três meses estava procurando paredes reais. A escalada me ensinou que o medo e o limite são coisas bem diferentes.",
          category: "esporte",
          img: UrlWeb(20),
        },
      ]);
      setLoad(false);
    }, 500);
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
