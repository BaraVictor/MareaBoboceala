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
    day: "ZIUA 1",
    title: "Prima conexiune",
    text: "Jocuri de cunoaștere gândite să spargă gheața. Pleci cu nume noi reținute și prima gașcă formată.",
  },
  {
    day: "ZIUA 2",
    title: "Echipă & energie",
    text: "Continuăm cu activități de socializare și integrare, în echipe competiție prietenoasă, multe râsete.",
  },
  {
    day: "ZIUA 3",
    title: "Petrecerea la Mecano",
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

export const LOCATII_ITEMS = [
  {
    tag: "// PUNCTUL DE PLECARE",
    title: "Ne adunăm la Facultate",
    description: "Aici începe totul. Ne strângem în curtea facultății, facem prezența, ne cunoaștem mai bine și pornim împreună spre distracție.",
    address: "Facultatea de Inginerie Industrială și Robotică (FIIR)",
    subAddress: "Splaiul Independenței",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.6229962198895!2d26.046775476871332!3d44.44089507107568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201c047f8d021%3A0x41c874ce747cee15!2sFaculty%20of%20Industrial%20Engineering%20and%20Robotics!5e0!3m2!1sen!2sro!4v1788283307508!5m2!1sen!2sro",
  },
  {
    tag: "// MARELE FINAL",
    title: "Petrecerea are loc la Mecano",
    description: "Ultima zi a Marii Boboceli se încheie în forță la Mecano, unul dintre cele mai îndrăgite localuri. Acces liber pentru boboci, deschis tuturor studenților.",
    address: "Mechano Pub",
    subAddress: "Regie, București",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1424.1695392950844!2d26.05063351311117!3d44.44671789874891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201eb55b8eb5f%3A0x27e591813db3ca7e!2sMechano%20Pub!5e0!3m2!1sen!2sro!4v1788281848571!5m2!1sen!2sro",
  }
];