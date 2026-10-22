import brandSymbol from "../assets/Picture1-removebg-preview.png";

export default function Brand() {
  return (
    <a
      className="brand"
      href="index.html"
      aria-label="MS Performance Training home"
    >
      <img
        className="brand-symbol"
        src={brandSymbol}
        alt=""
        width="42"
        height="42"
      />
      <span>
        MS PERFORMANCE
        <small>TRAINING</small>
      </span>
    </a>
  );
}
