/**
 * Conteúdo central da landing page.
 * Tudo que for texto, foto, telefone ou SEO deve ser editado aqui —
 * os componentes só leem deste arquivo.
 *
 * Itens marcados com "CONFIRMAR" precisam ser validados pelo dono do passeio
 * antes de subir a campanha no Google Ads (anúncio e página precisam bater).
 */

export const site = {
  name: "Jangada Patacho",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "pt_BR",

  title: "Passeio de Jangada nas Piscinas Naturais do Patacho | Alagoas",
  shortTitle: "Passeio de Jangada no Patacho",
  description:
    "Passeio de jangada até as piscinas naturais da Praia do Patacho, na Rota Ecológica dos Milagres (AL). Águas cristalinas, peixinhos e o mar mais bonito de Alagoas. Reserve pelo WhatsApp.",

  whatsapp: {
    // Formato internacional, só dígitos: 55 + DDD 82 + número
    number: "5582999919469",
    display: "(82) 99991-9469",
    defaultMessage:
      "Olá! Vi o site e quero saber sobre o passeio de jangada nas piscinas naturais do Patacho. Quais datas e horários vocês têm disponíveis?",
  },

  location: {
    beach: "Praia do Patacho",
    city: "Porto de Pedras",
    region: "Rota Ecológica dos Milagres",
    state: "AL",
    stateName: "Alagoas",
    country: "BR",
    // Coordenadas do ponto de embarque (pegue no Google Maps) — CONFIRMAR.
    // Deixe null para não enviar coordenadas ao Google.
    geo: null as { latitude: number; longitude: number } | null,
  },

  // Na vela da jangada aparece "@patacho_piscinas" — CONFIRMAR se é o perfil oficial e preencher a URL
  instagram: "" as string,
} as const;

export type PhotoCategory = "vela" | "jangada" | "boia" | "peixinhos" | "rede" | "por-do-sol";

export const photoCategories: { id: PhotoCategory; label: string; note?: string }[] = [
  { id: "vela", label: "Na vela" },
  { id: "jangada", label: "Jangada colorida" },
  { id: "boia", label: "Na boia" },
  { id: "peixinhos", label: "Peixinhos" },
  { id: "rede", label: "Na rede" },
  { id: "por-do-sol", label: "Pôr do sol", note: "Passeio à parte" },
];

export type Photo = {
  /** Caminho dentro de /public, ex.: "/fotos/boia-piscinas-naturais-1.jpg" */
  src: string;
  /** Lido pelo Google Imagens e por leitores de tela: descreva a cena com palavras-chave naturais */
  alt: string;
  category: PhotoCategory;
  width: number;
  height: number;
};

const V = { width: 1350, height: 2400 }; // fotos de drone (9:16)
const G = { width: 2100, height: 2400 }; // fotos meio-a-meio dentro d'água

/**
 * Galeria — as fotos ficam em /public/fotos (já otimizadas para web).
 * Os originais em alta resolução estão em /fotos-originais (fora do site).
 * Para adicionar fotos novas (ex.: "na rede"), exporte em ~2400px de altura,
 * coloque em /public/fotos e acrescente uma linha aqui.
 */
export const photos: Photo[] = [
  { src: "/fotos/boia-piscinas-naturais-3.jpg", category: "boia", ...V, alt: "Vista de drone de casal relaxando em boia nas piscinas naturais do Patacho, com água turquesa e recifes" },
  { src: "/fotos/jangada-a-vela-patacho-1.jpg", category: "vela", ...V, alt: "Casal em pé na jangada a vela sobre o mar cristalino do Patacho, Alagoas" },
  { src: "/fotos/peixinhos-piscinas-naturais-patacho-1.jpg", category: "peixinhos", ...G, alt: "Amigas nas piscinas naturais do Patacho cercadas de peixinhos listrados" },
  { src: "/fotos/jangada-colorida-patacho-2.jpg", category: "jangada", ...V, alt: "Jangada colorida rosa ancorada nas piscinas naturais do Patacho com recifes ao fundo" },
  { src: "/fotos/por-do-sol-pedido-casamento.jpg", category: "por-do-sol", ...V, alt: "Pedido de casamento no teto do barco durante o passeio de pôr do sol em Alagoas" },
  { src: "/fotos/jangada-a-vela-patacho-2.jpg", category: "vela", ...V, alt: "Mulher na jangada a vela navegando pelas águas transparentes da Rota Ecológica dos Milagres" },
  { src: "/fotos/boia-piscinas-naturais-1.jpg", category: "boia", ...V, alt: "Casal deitado em boia flutuando nas piscinas naturais do Patacho, vista de cima" },
  { src: "/fotos/peixinhos-piscinas-naturais-patacho-2.jpg", category: "peixinhos", ...G, alt: "Casal abraçado na água cristalina com cardume de peixes nas piscinas naturais de Alagoas" },
  { src: "/fotos/jangada-colorida-patacho-1.jpg", category: "jangada", ...V, alt: "Amigas acenando no teto da jangada sobre o mar azul-turquesa do Patacho" },
  { src: "/fotos/por-do-sol-passeio-1.jpg", category: "por-do-sol", ...V, alt: "Casal no barco colorido durante o passeio de pôr do sol no rio, em Alagoas" },
  { src: "/fotos/jangada-a-vela-patacho-3.jpg", category: "vela", ...V, alt: "Vista aérea de mulher deitada na jangada a vela sobre o mar transparente do Patacho" },
  { src: "/fotos/boia-piscinas-naturais-2.jpg", category: "boia", ...V, alt: "Boia colorida sobre a água clara e os recifes das piscinas naturais do Patacho" },
  { src: "/fotos/peixinhos-piscinas-naturais-patacho-3.jpg", category: "peixinhos", ...G, alt: "Beijo de casal na água com peixinhos ao redor nas piscinas naturais do Patacho" },
  { src: "/fotos/jangada-colorida-patacho-3.jpg", category: "jangada", ...V, alt: "Casal celebrando no teto da jangada rosa nas piscinas naturais de Alagoas" },
  { src: "/fotos/por-do-sol-passeio-2.jpg", category: "por-do-sol", ...V, alt: "Casal abraçado no barco ao entardecer no passeio de pôr do sol em Alagoas" },
];

export const hero = {
  /**
   * Vídeo de fundo: coloque o arquivo em /public/videos/hero.mp4 (e opcionalmente hero.webm).
   * Recomendado: 10–20 s em loop, 1920x1080 (ou 1080x1920 para versão vertical),
   * sem áudio, até ~6 MB. Enquanto não houver vídeo, o hero usa a foto abaixo com movimento lento.
   */
  video: "/videos/hero.mp4",
  videoWebm: "/videos/hero.webm",
  image: photos.find((p) => p.src.includes("boia-piscinas-naturais-2")) ?? photos[0],
  eyebrow: "Praia do Patacho · Rota Ecológica dos Milagres · Alagoas",
  headline: "Navegue de jangada até as piscinas naturais do Patacho",
  sub: "Água cristalina, peixinhos ao redor e o mar mais bonito de Alagoas — em um passeio tradicional pela Rota Ecológica dos Milagres.",
  cta: "Reservar pelo WhatsApp",
};

/** Passeio extra exibido em seção própria (as fotos de pôr do sol são de outro passeio) */
export const sunset = {
  title: "Passeio do pôr do sol",
  text: "Um passeio à parte, de barco, para ver o céu de Alagoas mudar de cor no fim da tarde. Perfeito para casais, aniversários e até pedidos de casamento.",
  message:
    "Olá! Vi o site e quero saber sobre o passeio do pôr do sol. Quais datas vocês têm disponíveis?",
};

/** Passos para reservar (cards numerados) — CONFIRMAR detalhes de embarque */
export const steps = [
  { title: "Chame no WhatsApp", text: "Diga a data da viagem e quantas pessoas vão. A resposta é rápida e direto com a gente." },
  { title: "Confirme o horário", text: "Conferimos a tábua de maré e indicamos o melhor horário para ver as piscinas no auge." },
  { title: "Embarque e aproveite", text: "Encontre a jangada na Praia do Patacho e navegue até as piscinas naturais." },
];

/**
 * Momentos do passeio (cards com foto). São os cenários das fotos que o cliente enviou.
 * CONFIRMAR com o dono quais estão inclusos no passeio padrão.
 */
export const moments = [
  {
    title: "Na vela",
    photo: "/fotos/jangada-a-vela-patacho-1.jpg",
    text: "A jangada a vela tradicional de Alagoas, deslizando sobre a água transparente.",
    items: ["Foto clássica do Patacho", "Mar calmo e raso", "Cenário icônico"],
  },
  {
    title: "Jangada colorida",
    photo: "/fotos/jangada-colorida-patacho-2.jpg",
    text: "Jangadas coloridas ancoradas nas piscinas, perfeitas para curtir em grupo.",
    items: ["Ideal para casais e amigos", "Sombra e conforto", "Vista dos recifes"],
  },
  {
    title: "Na boia",
    photo: "/fotos/boia-piscinas-naturais-3.jpg",
    text: "Flutue na boia sobre a água cristalina e garanta a foto de drone mais bonita da viagem.",
    items: ["Água morna e clara", "Relaxamento total", "Foto vista de cima"],
  },
  {
    title: "Com os peixinhos",
    photo: "/fotos/peixinhos-piscinas-naturais-patacho-1.jpg",
    text: "Cardumes nadando ao seu redor nas piscinas formadas pelos recifes.",
    items: ["Peixes de perto", "Foto meio dentro, meio fora", "Diversão para todas as idades"],
  },
];

/** Bloco "Por que reservar com a gente" */
export const whyUs = [
  "Fotos reais do nosso passeio",
  "Reserva direta, sem intermediário",
  "Horário certo pela tábua de maré",
  "Atendimento rápido no WhatsApp",
];

/** O que está incluso — CONFIRMAR com o dono do passeio */
export const included = [
  "Passeio de jangada até as piscinas naturais",
  "Condução por jangadeiro experiente da região",
  "Tempo livre para banho e flutuação",
  "Saídas conforme a tábua de maré (maré baixa)",
];

export const tips = [
  "Leve protetor solar (de preferência biodegradável), chapéu e água.",
  "Use roupa de banho e leve uma bolsa estanque para o celular.",
  "Não pise nem toque nos corais — eles são vivos e protegidos.",
  "Não alimente os peixes: isso altera o ecossistema das piscinas.",
];

/** Perguntas frequentes — também viram dados estruturados (FAQPage) para o Google */
export const faq = [
  {
    q: "Onde ficam as piscinas naturais do Patacho?",
    a: "Na Praia do Patacho, em Porto de Pedras, no litoral norte de Alagoas. A praia faz parte da Rota Ecológica dos Milagres, junto de São Miguel dos Milagres, a pouco mais de 100 km de Maceió.",
  },
  {
    q: "O passeio acontece todos os dias?",
    a: "O passeio depende da maré baixa, que é quando as piscinas naturais se formam. Por isso os horários mudam a cada dia. Chame no WhatsApp com a data da sua viagem e indicamos o melhor horário.",
  },
  {
    q: "Quanto tempo dura o passeio de jangada?",
    a: "A duração varia conforme a maré do dia. Informamos o tempo exato quando você reserva pelo WhatsApp.",
  },
  {
    q: "Crianças e pessoas que não sabem nadar podem ir?",
    a: "Sim. Na maré baixa as piscinas costumam ser rasas e calmas. Conte para a gente no WhatsApp quem vai no passeio que orientamos tudo antes do embarque.",
  },
  {
    q: "Qual a melhor época para ir ao Patacho?",
    a: "As piscinas aparecem o ano todo nas marés baixas. Entre setembro e março o tempo costuma ser mais firme e a água mais clara. Dias de lua cheia e lua nova trazem as marés mais baixas.",
  },
  {
    q: "Como faço para reservar?",
    a: "É só clicar em qualquer botão de WhatsApp desta página. Você fala direto com a gente, escolhe a data e garante sua vaga na jangada.",
  },
];
