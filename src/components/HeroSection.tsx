import React, { useEffect, useState } from 'react';
export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section id="inicio" className="relative w-full h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img src="https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80" alt="Emparedado de jamón y queso" className="w-full h-full object-cover" />
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className={`font-['Montserrat'] font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6
              transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Delicias de Turrialba
          </h1>
          <p className={`font-['Open_Sans'] italic text-lg md:text-xl text-white mb-8
              transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            Descubre la auténtica receta del emparedado de jamón y queso, una
            herencia tradicional de Costa Rica.
          </p>
          <button className={`bg-[#F2E2C4] text-[#D64A37] font-bold py-3 px-8 rounded-full hover:scale-110 transition-all duration-300
              ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={() => document.getElementById('descripcion')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Ver Receta
          </button>
        </div>
      </div>
    </section>;
};