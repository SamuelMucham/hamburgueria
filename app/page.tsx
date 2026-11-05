import Marquee from "@/components/Marquee";
import MenuTabs from "@/components/MenuTabs";
import {
  BRAND,
  CITY,
  GALLERY,
  IMAGES,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  PREP_CARDS,
  SHOW_TESTIMONIALS,
  TESTIMONIALS,
  WHATSAPP_URL,
} from "@/lib/data";

function Wa({
  children = "Peça pelo WhatsApp",
  ghost = false,
}: {
  children?: React.ReactNode;
  ghost?: boolean;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={`btn ${ghost ? "ghost" : ""}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="nav">
        <a href="#" className="logo">
          {BRAND}
        </a>
        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Galeria</a>
          {SHOW_TESTIMONIALS && <a href="#depoimentos">Depoimentos</a>}
          <a href="#cardapio">Cardápio</a>
        </nav>
        <Wa />
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">
            {CITY.replace(", ", " · ")} · Artesanal
          </p>
          <h1>Aqui a fome não tem chance!</h1>
          <p className="lead">
            Hambúrgueres artesanais feitos para transformar fome em felicidade.
          </p>
          <div className="actions">
            <a href="#cardapio" className="btn">
              Fazer pedido
            </a>
            <a href="#cardapio" className="btn ghost">
              Ver cardápio
            </a>
          </div>
          <div className="info-cards">
            <div className="info-card">
              <span>Local</span>
              <strong>Campo Largo</strong>
            </div>
            <div className="info-card">
              <span>Pedido</span>
              <strong>WhatsApp</strong>
            </div>
          </div>
        </div>
        <div className="hero-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMAGES.hero} alt="Hambúrguer com batatas fritas em prato escuro" />
        </div>
      </section>

      <Marquee
        segments={[
          "Hambúrguer artesanal, suculento e feito na hora em Campo Largo",
          "combos",
          "batata frita",
        ]}
      />

      {/* PREPARO */}
      <section id="servicos" className="section yellow">
        <div className="prep-head">
          <div>
            <p className="eyebrow red">✦ Nosso preparo</p>
            <h2>Qualidade em cada mordida</h2>
          </div>
          <p>Ingredientes frescos e selecionados para a melhor experiência.</p>
        </div>
        <div className="prep-cards">
          {PREP_CARDS.map((c, i) => (
            <article key={c.title} className={`prep-card c${i % 3}`}>
              <div className="prep-art" aria-hidden="true">
                {c.emoji}
              </div>
              <span className="prep-tag">✦ {c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ESSÊNCIA */}
      <section className="essence-wrap">
        <div className="essence">
          <p className="essence-eyebrow">Nossa essência</p>
          <blockquote>
            Transformar <em>fome em felicidade</em>, com refeições que ficam
            na memória.
          </blockquote>
          <div className="essence-by">
            <strong>{BRAND}</strong>
            <span>Hamburgueria artesanal</span>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="section gallery-sec">
        <p className="eyebrow red">✦ Galeria</p>
        <h2>Feito para dar água na boca</h2>
        <p className="drag-hint">✥ Arraste para o lado e veja</p>
        <div className="gallery" tabIndex={0}>
          {GALLERY.map((g, i) => (
            <figure key={g.n} className={`slide s${i % 3}`}>
              <span className="slide-n">{g.n}</span>
              <span className="slide-emoji">{g.emoji}</span>
              <figcaption>{g.title}</figcaption>
            </figure>
          ))}
          <figure className="slide cta-slide">
            <span className="slide-n">06</span>
            <Wa />
          </figure>
        </div>
      </section>

      {/* DEPOIMENTOS (escondido até haver depoimentos reais) */}
      {SHOW_TESTIMONIALS && TESTIMONIALS.length > 0 && (
        <section id="depoimentos" className="section">
          <p className="eyebrow center">Clientes felizes</p>
          <h2>
            Quem prova, <em>aprova</em> o sabor
          </h2>
          <div className="cards two">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="card">
                <p>“{t.text}”</p>
                <strong>{t.name}</strong>
                <span className="tag">{t.label}</span>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* CARDÁPIO */}
      <section id="cardapio" className="section">
        <p className="eyebrow center">Cardápio</p>
        <h2>
          Escolha seu <em>favorito</em> agora
        </h2>
        <p className="sub">
          Hambúrgueres artesanais, combos e porções em Campo Largo.
        </p>
        <MenuTabs />
        <div className="center-btn">
          <Wa />
        </div>
      </section>

      {/* ONDE ESTAMOS */}
      <section className="section alt">
        <div className="where">
          <div>
            <p className="eyebrow">Onde estamos</p>
            <h2 className="left">
              Venha nos <em>visitar</em>
            </h2>
            <p className="sub left">
              Estamos em {CITY} e atendemos a região. Peça rápido pelo
              WhatsApp.
            </p>
            <div className="hours">
              <span>Segunda a Domingo</span>
              <strong>Consulte horário</strong>
            </div>
            <div className="actions">
              <Wa />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="btn ghost"
              >
                Ver rota
              </a>
            </div>
          </div>
          <div className="where-img" aria-hidden="true">
            <span>📍</span>
            <strong>{CITY}</strong>
          </div>
        </div>
      </section>

      <Marquee segments={["Transforme sua fome em felicidade"]} reverse />

      {/* CTA FINAL */}
      <section className="final">
        <h2>
          Transforme sua fome em <em>felicidade</em>
        </h2>
        <p className="sub">Peça hambúrgueres fresquinhos pelo WhatsApp.</p>
        <div className="actions center">
          <Wa />
          <a href="#cardapio" className="btn ghost">
            Ver cardápio
          </a>
        </div>
      </section>

      <Marquee segments={["Fome de quê?"]} />

      {/* RODAPÉ */}
      <footer className="footer">
        <div>
          <strong className="logo">{BRAND}</strong>
          <p>Transformando fome em felicidade em {CITY}.</p>
        </div>
        <div>
          <a href={`tel:+${PHONE_E164}`}>{PHONE_DISPLAY}</a>
          <p>{CITY}</p>
        </div>
        <nav>
          <a href="#">Início</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#servicos">Sobre</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Contato
          </a>
        </nav>
        <p className="copy">
          © {new Date().getFullYear()} {BRAND}. Todos os direitos reservados.{" "}
          <a href="#">Voltar ao topo ↑</a>
        </p>
      </footer>
    </main>
  );
}
