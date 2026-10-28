import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react"
import "./App.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const frogRef = useRef(null);

  useGSAP(() => {
    gsap.from(frogRef.current, {
      y: 120,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: frogRef.current,
        start: 'top 80%',
        end: "top 30%",
        markers: true,
        scrub:true,
        toggleActions: "play none none reset",
      },
    });

    gsap.set(".flower", {
      opacity:0,
      y:40,
    });

    ScrollTrigger.batch(".flower", {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity:1,
          y:0,
          stagger:0.15,
          duration:0.6,
          ease:"back.out(1.7)",
          overwrite:true,
        });
      },
      start: "top 85%",
    })
  });

  return (
    <main className="pixel-world">
      <section className="intro">
        <p>✿ A LITTLE WORLD OF MAGIC</p>
        <h1>Welcome to<br />Frog Hollow 🐸</h1>
        <p>Scroll down to meet your tiny friend.</p>
        <span className="scroll-note">↓ SCROLL DOWN ↓</span>
      </section>

      <section className="pinned-world">
        <div className="pinned-content">
          <p>✿ A LITTLE PAUSE ✿</p>
          <h2>Stay a while.</h2>
          <div className="pinned-frog">🐸</div>
          <p>Scroll gently through our little world.</p>
        </div>

      </section>

      <section className="frog-scene">
        <div className="meadow">

          <div className="flower-row">
            <span className="flower">✿</span>
            <span className="flower">❀</span>
            <span className="flower">✿</span>
            <span className="flower">✾</span>
            <span className="flower">❀</span>
          </div>


          <div className="frog" ref={frogRef}>
            🐸
          </div>

        </div>

        <h2>A tiny friend awaits!</h2>
        <p>Every little adventure starts somewhere.</p>
      </section>
    </main>
  );
}

export default App;