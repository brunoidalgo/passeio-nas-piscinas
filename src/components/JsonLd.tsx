import { faq, photos, site } from "@/lib/site";

/** Dados estruturados (schema.org) para o Google entender o negócio, o passeio e as dúvidas. */
export function JsonLd() {
  const url = site.url.replace(/\/$/, "");
  const images = photos.slice(0, 6).map((p) => `${url}${p.src}`);
  const { location } = site;

  const address = {
    "@type": "PostalAddress",
    streetAddress: location.beach,
    addressLocality: location.city,
    addressRegion: location.state,
    addressCountry: location.country,
  };

  const graph = [
    {
      "@type": "LocalBusiness",
      "@id": `${url}/#negocio`,
      name: site.name,
      description: site.description,
      url,
      telephone: `+${site.whatsapp.number}`,
      logo: `${url}${site.logo.src}`,
      image: images,
      address,
      ...(location.geo && {
        geo: { "@type": "GeoCoordinates", ...location.geo },
      }),
      areaServed: [location.region, "São Miguel dos Milagres", location.city, location.stateName],
      ...(site.instagram ? { sameAs: [site.instagram] } : {}),
    },
    {
      "@type": "TouristTrip",
      "@id": `${url}/#passeio`,
      name: "Passeio de jangada nas piscinas naturais do Patacho",
      description: site.description,
      touristType: ["Casais", "Famílias", "Amigos"],
      image: images,
      provider: { "@id": `${url}/#negocio` },
      itinerary: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: { "@type": "TouristAttraction", name: location.beach, address },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "TouristAttraction",
              name: "Piscinas naturais do Patacho",
              description: "Piscinas naturais formadas por recifes na maré baixa.",
              address,
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${url}/#duvidas`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${url}/#site`,
      url,
      name: site.name,
      inLanguage: "pt-BR",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
