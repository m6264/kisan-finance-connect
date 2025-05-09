
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0"></div>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3')",
          opacity: 0.4 
        }}
      ></div>
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Connect, Invest, Grow with Pakistan's Agricultural Future
          </h1>
          <p className="text-xl text-white/90 mb-8">
            FarmLink bridges farmers with investors, enabling sustainable agriculture growth 
            while providing profitable investment opportunities in Pakistan's farming sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-farmlink-primary hover:bg-farmlink-dark text-white font-medium px-6 py-6">
              <Link to="/projects">Browse Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20 font-medium px-6 py-6">
              <Link to="/farmer-signup">Submit Your Farm Project</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
