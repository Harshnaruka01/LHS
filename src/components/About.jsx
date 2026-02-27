import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // trigger entrance animations after mount
    const t = setTimeout(() => el.classList.add("scroll-in"), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Navbar />

      <section className="about-section" ref={sectionRef}>
        <div className="about-container">
          <div className="about-left">
            <div className="kicker">WHO WE ARE</div>
            <h1 className="about-title">
              About <span className="accent">LHS</span>
            </h1>

            <p className="about-lead">
              NEGO is a full-stack tech service hub dedicated to helping businesses
              and students transform their innovative ideas into reality. With our
              expertise in cutting-edge technologies and passion for
              problem-solving, we deliver high-quality, scalable solutions tailored
              to your unique needs.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-value">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>

              <div className="stat-card">
                <div className="stat-value">85%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>

              <div className="stat-card">
                <div className="stat-value">1+</div>
                <div className="stat-label">Years Experience</div>
              </div>

              <div className="stat-card">
                <div className="stat-value">100%</div>
                <div className="stat-label">Dedication</div>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-visual">
              <div className="mission-badge">• Our Mission</div>

              <svg className="handshake" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="0" y="0" width="200" height="160" rx="12" fill="currentColor" opacity="0.06" />
                <g className="handshake-paths" transform="translate(20,20) scale(0.9)" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 80c10-20 40-20 60-4" />
                  <path d="M80 80c10 8 25 8 44-4" />
                  <path d="M40 72c6-8 24-18 36-10" />
                  <path d="M110 58c8 2 22 12 30 18" />
                </g>
              </svg>

              <h3 className="visual-title">Empowering Innovation Through Technology</h3>
              <p className="visual-sub">Delivering exceptional solutions that drive business growth and success.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
