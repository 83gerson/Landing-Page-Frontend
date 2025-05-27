import React, { useEffect, useState, useRef } from 'react';
export const DescriptionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  const ingredients = [{
    icon: '🍞',
    name: 'Pan artesanal',
    desc: 'Pan recién horneado de la región'
  }, {
    icon: '🧀',
    name: 'Queso Turrialba',
    desc: 'Queso fresco tradicional de la zona'
  }, {
    icon: '🍖',
    name: 'Jamón artesanal',
    desc: 'Jamón ahumado de producción local'
  }, {
    icon: '🧈',
    name: 'Mantequilla',
    desc: 'Mantequilla fresca de leche de vaca'
  }, {
    icon: '🌿',
    name: 'Hierbas',
    desc: 'Mezcla de hierbas aromáticas locales'
  }];
  return <section id="descripcion" ref={sectionRef} className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className={`rounded-lg overflow-hidden shadow-xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <img src="https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Emparedado sobre mesa rústica" className="w-full h-auto object-cover" />
              </div>
            </div>
            {/* Content */}
            <div className="w-full md:w-1/2">
              <h2 className={`font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#5A3921] mb-6
                  transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Una combinación perfecta
              </h2>
              <div className={`font-['Open_Sans'] italic text-lg text-[#5A3921] mb-8
                  transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <p className="mb-4">
                  El emparedado de jamón y queso de Turrialba es más que una
                  simple comida, es parte de nuestra identidad cultural.
                  Elaborado con ingredientes frescos de la región, este sándwich
                  representa la sencillez y autenticidad de la cocina
                  costarricense.
                </p>
                <p>
                  Cada bocado es un viaje a las verdes montañas de Turrialba,
                  donde el queso fresco se produce artesanalmente y los
                  ingredientes mantienen su esencia natural.
                </p>
              </div>
              <h3 className={`font-['Montserrat'] font-semibold text-xl text-[#5A3921] mb-4
                  transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Ingredientes principales:
              </h3>
              <ul className="space-y-3">
                {ingredients.map((item, index) => <li key={index} className={`flex items-center text-[#4A7B38] font-['Open_Sans'] 
                      transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{
                transitionDelay: `${400 + index * 100}ms`
              }}>
                    <span className="text-2xl mr-3">{item.icon}</span>
                    <div>
                      <span className="font-semibold">{item.name}</span>
                      <span className="text-sm block text-[#5A3921] italic">
                        {item.desc}
                      </span>
                    </div>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};