# Planejamento da landing page: Passeio de Jangada no Patacho

**Objetivo único:** levar o visitante (orgânico e Google Ads) a clicar no WhatsApp **(82) 99991-9469** e pedir a reserva do passeio de jangada nas piscinas naturais do Patacho.

**Stack:** Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + Motion (animações) + `@next/third-parties` (Google Tag Manager). A página é gerada como **HTML estático**, o que a deixa rápida e boa para SEO e para o Índice de Qualidade do Google Ads.

---

## 1. Estratégia de conversão

| Princípio | Como foi aplicado |
|---|---|
| Uma oferta, uma ação | Todos os botões levam ao WhatsApp. Não há formulário, menu de outros produtos nem links de saída. |
| CTA sempre visível | Botão no header, no hero, em cada seção e um botão flutuante que aparece depois do hero. |
| Prova visual | Galeria com **fotos reais do passeio** (vela, jangada colorida, boia, peixinhos e pôr do sol), com filtro por categoria e ampliação. |
| Menos atrito | A mensagem do WhatsApp já vem pronta. O cliente só aperta "enviar". |
| Objeções respondidas | FAQ cobrindo local, maré, duração, crianças, melhor época e reserva. |
| Urgência honesta | O passeio depende da maré baixa, então "consulte o horário da sua data" incentiva o contato sem promessas falsas. |
| Mobile first | A maioria do tráfego do Ads vem do celular. Botões grandes, CTA flutuante e nada de rolagem horizontal. |

### Estrutura da página (ordem das seções)

1. **Hero:** vídeo ou foto em tela cheia, título com a palavra-chave principal, CTA do WhatsApp e cartão com local, passeio e fotos.
2. **3 passos para reservar:** cards numerados e faixa amarela "100% fotos reais".
3. **Pacotes de fotos (dentro do passeio):** carrossel com card central em destaque com os 4 pacotes: Na rede molhada, Na vela, Na jangada colorida e Na boia. Um aviso deixa claro que não são passeios separados. Cada card abre o WhatsApp já citando o pacote escolhido.
4. **Sobre o Patacho:** blocos em grade (texto + o que está incluso, foto, contagem de fotos) e números em destaque.
5. **Galeria:** fotos reais com filtros e lightbox.
6. **Por que reservar com a gente:** diferenciais, aviso da maré, telefone em destaque e dicas.
7. **Passeio do pôr do sol:** passeio à parte, com mensagem de WhatsApp própria.
8. **Dúvidas frequentes:** também enviadas ao Google como dados estruturados.
9. **Faixa de fotos + "Reserve agora!"**, depois o rodapé.

As referências visuais enviadas foram combinadas assim: **verde-petróleo + amarelo**, títulos com destaque manuscrito, bordas de papel rasgado e passos numerados vêm da 1ª. O **hero centralizado**, o **carrossel com card central maior** e os **blocos em grade + números** vêm da 2ª.

---

## 2. SEO (o que já está implementado)

**Palavra-chave principal:** passeio de jangada Patacho / piscinas naturais do Patacho
**Secundárias:** Praia do Patacho, Rota Ecológica dos Milagres, São Miguel dos Milagres passeios, Porto de Pedras, piscinas naturais Alagoas

- [x] `<title>` e meta description com a palavra-chave (`src/lib/site.ts`)
- [x] `lang="pt-BR"`, `canonical`, Open Graph e Twitter Card
- [x] Imagem de compartilhamento 1200×630 feita com foto real (`src/app/opengraph-image.jpg`)
- [x] Um único `<h1>` com a palavra-chave; `<h2>` por seção; `<h3>` nos cards e perguntas
- [x] **Dados estruturados JSON-LD:** `LocalBusiness`, `TouristTrip`, `TouristAttraction`, `FAQPage` e `WebSite`
- [x] `sitemap.xml` com **sitemap de imagens** (ajuda as fotos a aparecerem no Google Imagens)
- [x] `robots.txt` e `manifest.webmanifest`
- [x] Fotos com nomes descritivos (`jangada-a-vela-patacho-1.jpg`) e `alt` com contexto
- [x] Imagens otimizadas: os originais tinham 436 MB e as versões web somam 7,6 MB. O Next ainda converte para AVIF/WebP no tamanho de cada tela
- [x] Página 100% estática, fontes self-hosted (`next/font`) e hero com `priority` para o LCP
- [x] Animações respeitam `prefers-reduced-motion`

### Depois de publicar

- [ ] Definir `NEXT_PUBLIC_SITE_URL` com o domínio final (canonical, sitemap e JSON-LD dependem disso)
- [ ] Cadastrar o domínio no **Google Search Console** e enviar `https://SEUDOMINIO/sitemap.xml`
- [ ] Criar ou atualizar o **Perfil da Empresa no Google** (Google Maps) com o mesmo nome, telefone e link do site. Para buscas locais, é o fator que mais pesa
- [ ] Pedir avaliações no Google aos clientes depois do passeio e, quando houver avaliações reais, adicionar depoimentos na página
- [ ] Testar em https://pagespeed.web.dev e https://search.google.com/test/rich-results

---

## 3. Google Tag Manager e rastreamento de conversão

### O que o código já faz

Todo clique em botão de WhatsApp envia ao `dataLayer`:

```js
{
  event: "whatsapp_click",
  cta_location: "hero" | "header" | "steps" | "photo_packages" | "about" | "gallery" |
                "why_us" | "sunset" | "faq" | "final_cta" | "floating" | "footer",
  link_url: "wa.me"
}
```

O `cta_location` mostra **qual botão converte mais**. O GTM só carrega quando `NEXT_PUBLIC_GTM_ID` está preenchido.

### Passo a passo no GTM (tagmanager.google.com)

1. Crie um container **Web** e copie o ID (`GTM-XXXXXXX`) para `NEXT_PUBLIC_GTM_ID` no `.env.local` e na hospedagem.
2. **Variável:** *Variáveis → Nova → Variável da camada de dados*, com nome `cta_location`. Nomeie como `DLV - cta_location`.
3. **Acionador:** *Acionadores → Novo → Evento personalizado*, com nome do evento `whatsapp_click`. Nomeie como `CE - whatsapp_click`.
4. **Tag Vinculador de conversões:** *Tags → Nova → Vinculador de conversões do Google Ads*, acionada em *All Pages*. Ela é obrigatória para o Ads atribuir a conversão.
5. **Tag de conversão do Google Ads:**
   - No Google Ads: *Metas → Conversões → Nova ação de conversão → Site → Manual*. Use a categoria "Contato" e o nome "Clique WhatsApp", com contagem **Uma** por clique de anúncio.
   - Copie o **ID de conversão** e o **rótulo de conversão**.
   - No GTM: *Tags → Nova → Acompanhamento de conversões do Google Ads*, cole ID e rótulo e use o acionador `CE - whatsapp_click`.
6. **(Recomendado) GA4:** crie a tag *Google Analytics: evento GA4* com nome do evento `whatsapp_click`, parâmetro `cta_location = {{DLV - cta_location}}` e o mesmo acionador. Depois marque o evento como **evento principal** no GA4.
7. **Visualizar (Preview)** no GTM, clique nos botões do site e confirme que as tags disparam. Depois clique em **Publicar**.

> **Dica:** como o WhatsApp abre em nova aba, a página não é descarregada e a tag tem tempo de disparar.

### LGPD (recomendado antes de escalar o tráfego)

Use um banner de consentimento compatível com o **Consent Mode v2** (por exemplo, CookieYes ou Cookiebot, configurados no próprio GTM). Sem consentimento, o Google Ads passa a usar modelagem de conversões.

---

## 4. Google Ads: recomendações para a campanha

- **Tipo:** Rede de Pesquisa. Comece só nela, sem Display.
- **Localização:** pessoas **interessadas** em Alagoas, Maceió, Maragogi e São Miguel dos Milagres, mais quem está fisicamente na região. Turista pesquisa antes de viajar.
- **Palavras-chave (correspondência de frase ou exata):**
  - "passeio de jangada patacho", "piscinas naturais patacho", "praia do patacho passeio"
  - "passeios são miguel dos milagres", "rota ecológica dos milagres passeio"
  - "piscinas naturais alagoas", "passeio piscinas naturais porto de pedras"
- **Negativas iniciais:** emprego, vaga, aluguel, venda, terreno, pousada (se não oferecer), "como chegar de ônibus"
- **Anúncio (RSA):** use os títulos da página para manter a coerência anúncio ↔ página, por exemplo "Passeio de Jangada no Patacho", "Piscinas Naturais de Alagoas", "Reserve pelo WhatsApp", "Fotos Reais do Passeio", "Saídas na Maré Baixa".
- **Extensões:** chamada (mesmo número), sitelinks para `#galeria`, `#pacotes-de-fotos` e `#duvidas`, e frases de destaque.
- **Lance:** comece com *Maximizar cliques* com teto de CPC. Depois de cerca de 15–30 conversões, mude para *Maximizar conversões*.
- **URL final:** `https://SEUDOMINIO/?utm_source=google&utm_medium=cpc&utm_campaign=jangada-patacho`

---

## 5. Pendências de conteúdo (precisam ser confirmadas pelo dono do passeio)

Estão marcadas com `CONFIRMAR` em `src/lib/site.ts`:

- [x] **Marca:** Patacho Piscina (logo em `public/logo-patacho-piscina.png`, ícone em `src/app/icon.png`). Instagram: [@patacho_piscina](https://www.instagram.com/patacho_piscina/)
- [x] **Fotos "na rede molhada"** adicionadas
- [ ] **Pacotes de fotos:** o site mostra 4 pacotes dentro do passeio: *Na rede molhada, Na vela, Na jangada colorida, Na boia*. Confirmar os nomes e se há valor adicional (o site não cita preço)
- [ ] **Ponto de embarque e coordenadas** (`site.location.geo`)
- [ ] **O que está incluso** no passeio
- [ ] **Duração** do passeio (o FAQ hoje diz que varia conforme a maré)
- [ ] **Vídeo do hero:** salve em `public/videos/hero.mp4` (opcional `hero.webm`). O site troca a foto pelo vídeo automaticamente.
  - Especificação: 10–20 s em loop, sem áudio, 1920×1080, H.264, **até ~6 MB**
  - Não encontrei vídeo gratuito confiável do Patacho em bancos de imagem. Um trecho do próprio drone (DJI) é o ideal e também é mais honesto para o anúncio.
- [ ] **Depoimentos:** só com avaliações reais (por exemplo, prints do Google ou do Instagram com autorização)

---

## 6. Como rodar e publicar

```bash
npm install
cp .env.example .env.local   # preencha as variáveis
npm run dev                  # http://localhost:3000
npm run build && npm start   # versão de produção
```

**Hospedagem recomendada:** Vercel (gratuita para esse porte e feita pelos criadores do Next.js). Conecte o repositório, adicione `NEXT_PUBLIC_SITE_URL` e `NEXT_PUBLIC_GTM_ID` nas variáveis de ambiente e aponte o domínio.

### Onde editar

| O quê | Arquivo |
|---|---|
| Textos, telefone, FAQ, fotos, SEO | `src/lib/site.ts` |
| Mensagem pronta do WhatsApp | `site.whatsapp.defaultMessage` em `src/lib/site.ts` |
| Cores e fontes | `src/app/globals.css` e `src/app/layout.tsx` |
| Ordem das seções | `src/app/page.tsx` |
| Evento do GTM | `src/lib/tracking.ts` |
| Fotos (versão web) | `public/fotos/` (os originais ficam em `fotos-originais/`, que não vai para o site) |
