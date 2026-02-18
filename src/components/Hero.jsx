import { useState, useEffect } from "react";

function Hero() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919461816161";
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  const lines = [
    "You Bring the Idea, We Bring the Solution.",
    "You Have Problem, We Have Solution.",
    "You Think It, We Design It.",
    "You Dream It, We Create It.",
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    const fullText = lines[currentLine];

    if (!isDeleting && displayText === fullText) {
      // Pause at full text before deleting
      timeoutId = setTimeout(() => setIsDeleting(true), 900);
    } else if (isDeleting && displayText === "") {
      // Move to next line after fully deleted
      setIsDeleting(false);
      setCurrentLine((c) => (c + 1) % lines.length);
    } else {
      const delta = isDeleting ? 40 : 80; // typing / deleting speed
      timeoutId = setTimeout(() => {
        setDisplayText((prev) => {
          if (isDeleting) return fullText.substring(0, prev.length - 1);
          return fullText.substring(0, prev.length + 1);
        });
      }, delta);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, currentLine, lines]);
  // removed interval-based rotation; using typewriter effect above

  return (
    <section className="hero">
      <div className="hero-background" aria-hidden="true"></div>
      <div className="hero-badge">
        <span className="dot" aria-hidden="true"></span>
        <span className="status-text">we are open to work</span>
      </div>

      <div className="hero-content">
        <div className="hero-lines" aria-live="polite">
          <h1 className={`hero-line active`}>{displayText}</h1>
        </div>

        <p>
          We Fulfill Your All Needs And Create Better World For You And Your Business.
        </p>

        <button className="btn-get-started" onClick={handleWhatsAppClick}>
          Let's Talk
        </button>
      </div>
    </section>
  );
}

export default Hero;
