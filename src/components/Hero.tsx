import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { heroText } from "../data/MainPageText";
import "./Hero.css";

export const Hero = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    heroText.backgroundImages.forEach((src) => { new Image().src = src; });
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroText.backgroundImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const bgStyles = useMemo(() => 
    heroText.backgroundImages.map((src, idx) => ({
      "--bg-image": `url(${src})`,
      "--opacity": currentImage === idx ? 1 : 0,
    } as React.CSSProperties)), 
  [currentImage]);

  return (
    <section className="hero-section">
      {heroText.backgroundImages.map((src, idx) => (
        <div key={src} className="hero-bg-image" style={bgStyles[idx]} />
      ))}

      <div className="hero-text-container">
        <h2 className="hero-title">
          {heroText.title}
          <br />
          <span className="hero-highlight">{heroText.highlight}</span>
        </h2>
        <p className="hero-description">{heroText.description}</p>
        <button className="hero-button" onClick={() => navigate(heroText.path)}>
          {heroText.buttonText}
        </button>
      </div>
    </section>
  );
};