export default function Hero(props) {
  return (
    <>
      <header className="text-white hero-not-home" style={{height: `${props.height}`}}>
        <div className="hero-text">
          <h2 className="hero-title">{props.text}</h2>
          <h3 className="hero-subtitle">{props.subText}</h3>
        </div>
        <div style={{backgroundImage: `url(${props.backdrop})`}} className="hero-background"></div>
      </header>
    </>
  );
}
