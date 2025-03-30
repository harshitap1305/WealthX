"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
<<<<<<< HEAD
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
  
      if (imageElement) {
        const opacity = Math.max(1 - scrollPosition / 500, 0.8); // Gradual fade
        const scale = Math.max(1 - scrollPosition / 2000, 0.95); // Slight shrink
  
        imageElement.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
        imageElement.style.opacity = opacity;
        imageElement.style.transform = `scale(${scale})`;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
=======

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

>>>>>>> 882a37f2 (Added pathway)
  return (
    <section className="pt-40 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
        Smart Finance, <br />Smarter Decisions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        An intelligent finance platform that tracks, analyzes, and optimizes your spending with real-time AI-driven insights.
        </p>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
<<<<<<< HEAD
              src="/bannerr.png"
              width={920}
              height={620}
              alt="Dashboard"
=======
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
>>>>>>> 882a37f2 (Added pathway)
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
