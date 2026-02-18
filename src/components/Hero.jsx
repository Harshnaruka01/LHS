function Hero() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919461816161";
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="dot" aria-hidden="true"></span>
        <span className="status-text">we are open to work</span>
      </div>
      <h1>You Have Problem, We Have Solution</h1>
      <p>
        We Fulfill Your All Needs And Create Better World For You And Your Business.
      </p>
      <button className="btn-get-started" onClick={handleWhatsAppClick}>Let's Talk</button>
    </section>
  );
}

export default Hero;
