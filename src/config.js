/* ------------------------------------------------------------------ */
/*  CONFIG — schimbă aici data evenimentului, adresa, linkurile etc.  */
/* ------------------------------------------------------------------ */

export const EVENT_START = new Date("2026-10-15T17:00:00");

export const VENUE_ADDRESS = "Mecano Club — Str. Exemplu nr. 1, orașul tău";

export const SOCIALS = {
  instagram: "https://instagram.com/osfiir",
  facebook: "https://facebook.com/osfiir",
  email: "contact@osfiir.ro",
};

export const PROGRAM_DAYS = [
  {
    key: "01",
    label: "Ziua 1",
    title: "Cunoaștere & jocuri de spart gheața",
    details: [
      "17:00 — Primire & echipe formate pe grupe",
      "17:30 — Jocuri de cunoaștere (nume, povești, provocări scurte)",
      "19:30 — Pauză socializare liberă",
    ],
  },
  {
    key: "02",
    label: "Ziua 2",
    title: "Integrare & activități pe echipe",
    details: [
      "17:00 — Recapitulare rapidă, reîntâlnire echipe",
      "17:30 — Jocuri de integrare & mini-provocări pe echipe",
      "19:30 — Pregătire pentru marea petrecere",
    ],
  },
  {
    key: "03",
    label: "Ziua 3",
    title: "Petrecerea la Mecano",
    details: [
      "18:00 — Deschidere porți Mecano",
      "19:00 — Muzică, jocuri de scenă, surprize",
      "23:59 — Se activează protocolul de distracție maximă",
    ],
  },
];

export const DESPRE_ITEMS = [
  {
    title: "Ziua 1 — Prima conexiune",
    text: "Jocuri de cunoaștere gândite să spargă gheața. Pleci cu nume noi reținute și prima gașcă formată.",
  },
  {
    title: "Ziua 2 — Echipă & energie",
    text: "Continuăm cu activități de socializare și integrare, în echipe — competiție prietenoasă, multe râsete.",
  },
  {
    title: "Ziua 3 — Petrecerea la Mecano",
    text: "Marele final: petrecere deschisă bobocilor și nu numai. Muzică, lumini, toată facultatea într-un singur loc.",
  },
];

export const GALLERY_PLACEHOLDERS = [
  { label: "Ediția 2025", colorFrom: "#3F62B2", colorTo: "#24345E" },
  { label: "Jocuri de cunoaștere", colorFrom: "#F28D28", colorTo: "#c96c14" },
  { label: "Petrecerea de la Mecano", colorFrom: "#39A54B", colorTo: "#1f6b31" },
  { label: "Boboci & prieteni noi", colorFrom: "#3F62B2", colorTo: "#F28D28" },
  { label: "Echipa OSFIIR", colorFrom: "#24345E", colorTo: "#3F62B2" },
  { label: "Momente de neuitat", colorFrom: "#39A54B", colorTo: "#3F62B2" },
];
