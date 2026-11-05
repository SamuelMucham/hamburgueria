// Faixa inclinada que rola sem parar: letras sólidas e vazadas alternadas, separadas por ✦.
export default function Marquee({
  segments,
  reverse = false,
}: {
  segments: string[];
  reverse?: boolean;
}) {
  // Cada metade tem um número PAR de itens, então sólido/vazado alternam sem emenda.
  const half = [...segments, ...segments];

  const row = (prefix: string) =>
    half.map((text, i) => (
      <span key={`${prefix}${i}`} className="mq-item">
        <span className={i % 2 === 0 ? "mq-solid" : "mq-outline"}>{text}</span>
        <span className="mq-star">✦</span>
      </span>
    ));

  return (
    <div className="mq-wrap" aria-hidden="true">
      <div className={`mq ${reverse ? "reverse" : ""}`}>
        <div className="mq-track">
          {row("a")}
          {row("b")}
        </div>
      </div>
    </div>
  );
}
