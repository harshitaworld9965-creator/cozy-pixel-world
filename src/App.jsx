import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {useGSAP} from "@gsap/react";
import "./App.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App(){
  const frogRef = useRef(null);

  useGSAP(() => {
    gsap.from(frogRef.current, {
      y:80,
      opacity:0,
      duration:1,
      ease:'power2.out',
      scrollTrigger: {
        trigger: frogRef.current,
        start: "top 80%",
        end: "top 30%",
        markers: true,
        toggleActions:"play none none reset"
      },
    });
  });

  return(
  <main className="world">
    <section className="welcome">
      <p className="eyebrow">✿ FROG HOLLOW ✿</p>
      <h1>Welcome to our little world.</h1>
      <p>Scroll down to discover a tony friend.</p>
      <span className="scroll-hint">KEEP EXPLORING</span>
    </section>

    <section className="meadow">
      <div className="meadow-card">
        <p className="eyebrow">A FRIEND IS WAITING.</p>
        <div className="frog" ref={frogRef}>🐸</div>
        <h2>Meet Pip!</h2>
        <p>Your tiny companion for today's adventure.</p>
      </div>
    </section>
  </main>
  );
}

export default App;