// Dados do negócio e conteúdo. Tudo que o dono precisar trocar fica aqui.

export const BRAND = "Ta Chovendo Hambúrguer";
export const CITY = "Campo Largo, PR";
export const PHONE_DISPLAY = "(41) 99920-1952";
export const PHONE_E164 = "5541999201952";

export const WHATSAPP_MESSAGE = "Olá! Vim pelo site da Ta Chovendo Hambúrguer.";
export const WHATSAPP_URL = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// A página original tem "Ver rota" sem destino. Aqui abre a busca no Google Maps.
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Ta Chovendo Hambúrguer Campo Largo PR"
)}`;

// Fotos de exemplo (Unsplash, as mesmas da página original).
// Troque pelas fotos reais da hamburgueria colocando os arquivos em /public e apontando aqui.
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1673166516558-3f1b88a22db8?auto=format&fit=crop&w=1200&q=80",
  fries:
    "https://images.unsplash.com/photo-1760304342164-1445321e6048?auto=format&fit=crop&w=1200&q=80",
};

// Os depoimentos da página original eram texto de exemplo ("Nome do cliente").
// Deixe false até ter depoimentos reais de clientes, com permissão.
export const SHOW_TESTIMONIALS = false;

export const TESTIMONIALS: { name: string; label: string; text: string }[] = [
  // { name: "Maria S.", label: "Cliente de combo especial", text: "..." },
];

export const PREP_CARDS = [
  {
    tag: "Carne",
    title: "Hambúrguer artesanal",
    text: "Blend fresco moldado todos os dias.",
    emoji: "🍔",
  },
  {
    tag: "Acompanhamento",
    title: "Batata frita",
    text: "Crocantes e sequinhas, porção ideal.",
    emoji: "🍟",
  },
  {
    tag: "Praticidade",
    title: "Combos especiais",
    text: "Lanche e bebida na medida certa.",
    emoji: "🥤",
  },
];

export const GALLERY = [
  { n: "01", title: "Hambúrguer artesanal suculento", emoji: "🍔" },
  { n: "02", title: "Batata frita crocante", emoji: "🍟" },
  { n: "03", title: "Combo especial", emoji: "🥤" },
  { n: "04", title: "Ingredientes frescos", emoji: "🥬" },
  { n: "05", title: "Preparado na hora", emoji: "🔥" },
];

export type MenuItem = {
  name: string;
  price: string; // texto livre, ex.: "R$ 29,90" ou "Consulte"
  tag?: string;
  description: string;
};

export const MENU_TABS = ["Hambúrgueres", "Combos", "Porções", "Bebidas"] as const;
export type MenuTab = (typeof MENU_TABS)[number];

// A página original mostrava só este item. Acrescente os demais conforme o cardápio real.
export const MENU: Record<MenuTab, MenuItem[]> = {
  Hambúrgueres: [
    {
      name: "Artesanal Clássico",
      price: "Consulte",
      tag: "da casa",
      description:
        "Blend da casa, queijo derretido e molho especial no pão macio.",
    },
  ],
  Combos: [],
  Porções: [],
  Bebidas: [],
};
