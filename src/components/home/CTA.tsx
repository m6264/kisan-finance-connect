
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="bg-farmlink-primary rounded-2xl overflow-hidden relative">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3')"
            }}
          ></div>
          <div className="relative z-10 py-12 px-6 md:py-16 md:px-10 lg:px-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow with Pakistan's Agricultural Future?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're a farmer looking for funding or an investor seeking sustainable returns, FarmLink provides the platform to connect and grow together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-farmlink-primary hover:bg-gray-100">
                <Link to="/farmer-signup">Join as Farmer</Link>
              </Button>
              <Button asChild size="lg" className="border-2 border-white bg-transparent hover:bg-white/20">
                <Link to="/investor-signup">Join as Investor</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
