import React from 'react';
export const Footer = () => {
  return <footer className="bg-[#5A3921] text-white py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-2">
                Delicias de Turrialba
              </h3>
              <p className="font-['Open_Sans'] text-sm opacity-80">
                Tradición y sabor en cada bocado
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="font-['Open_Sans'] text-sm mb-2 opacity-80">
                © {new Date().getFullYear()} Delicias de Turrialba. Todos los
                derechos reservados.
              </p>
              <p className="font-['Open_Sans'] text-sm opacity-80">
                Diseñado con 💚 en Costa Rica
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};