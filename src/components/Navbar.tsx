import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F5F0] shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-[#5A3921] font-bold text-xl md:text-2xl font-['Montserrat']">
          Delicias de Turrialba
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#5A3921] focus:outline-none">
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('inicio')} className="text-[#5A3921] hover:text-[#D64A37] transition-colors">
            Inicio
          </button>
          <button onClick={() => scrollToSection('descripcion')} className="text-[#5A3921] hover:text-[#D64A37] transition-colors">
            Ingredientes
          </button>
          <button onClick={() => scrollToSection('pasos')} className="text-[#5A3921] hover:text-[#D64A37] transition-colors">
            Preparación
          </button>
          <button onClick={() => scrollToSection('contacto')} className="text-[#5A3921] hover:text-[#D64A37] transition-colors">
            Contacto
          </button>
          <button onClick={() => scrollToSection('redes')} className="text-[#5A3921] hover:text-[#D64A37] transition-colors">
            Redes Sociales
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#F9F5F0] shadow-lg py-2">
          <div className="flex flex-col space-y-3 px-4 py-2">
            <button onClick={() => scrollToSection('inicio')} className="text-[#5A3921] hover:text-[#D64A37] transition-colors text-left py-2">
              Inicio
            </button>
            <button onClick={() => scrollToSection('descripcion')} className="text-[#5A3921] hover:text-[#D64A37] transition-colors text-left py-2">
              Receta
            </button>
            <button onClick={() => scrollToSection('pasos')} className="text-[#5A3921] hover:text-[#D64A37] transition-colors text-left py-2">
              Preparación
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-[#5A3921] hover:text-[#D64A37] transition-colors text-left py-2">
              Contacto
            </button>
            <button onClick={() => scrollToSection('redes')} className="text-[#5A3921] hover:text-[#D64A37] transition-colors">
            Redes Sociales
          </button>
          </div>
        </div>
      </div>
    </nav>;
};