import React, { useEffect, useState, useRef } from 'react';
export const StepByStepSection = () => {
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
  const steps = [{
    title: 'Preparar el pan',
    description: 'Corta el pan artesanal en rebanadas de aproximadamente 1 cm de grosor.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
  }, {
    title: 'Untar mantequilla',
    description: 'Unta una fina capa de mantequilla en una cara de cada rebanada de pan.',
    image: 'https://s1.elespanol.com/2024/07/02/actualidad/867423532_247449048_1024x576.jpg'
  }, {
    title: 'Añadir el jamón',
    description: 'Coloca el jamón artesanal sobre una de las rebanadas de pan.',
    image: 'https://www.lanacion.com.ar/resizer/v2/descubri-cual-es-la-mejor-forma-de-conservar-el-LQWZCKNIAVEMHJYUJMLRANAQRE.png?auth=e75a8e401f0bd9c897442daa34d1e6dcb8743e19c0d8774762178716a4d724ca&width=420&height=280&quality=70&smart=true'
  }, {
    title: 'Incorporar el queso',
    description: 'Agrega una generosa porción de queso Turrialba sobre el jamón.',
    image: 'https://images.unsplash.com/photo-1589881133595-a3c085cb731d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  }, {
    title: 'Finalizar el sándwich',
    description: 'Cierra el sándwich con la otra rebanada de pan y presiona ligeramente.',
    image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80'
  }, {
    title: 'Calentar (opcional)',
    description: 'Si lo prefieres caliente, tuesta el sándwich en una sartén hasta que el queso se derrita.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1049&q=80'
  }];
  return <section id="pasos" ref={sectionRef} className="py-16 md:py-24 bg-[#F9F5F0] w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#5A3921] mb-12 text-center
              transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Preparación Paso a Paso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => <div key={index} className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500
                  transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{
            transitionDelay: `${index * 150}ms`
          }}>
                <div className="h-48 overflow-hidden">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-['Montserrat'] font-semibold text-xl text-[#5A3921] mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="font-['Open_Sans'] italic text-[#5A3921]">
                    {step.description}
                  </p>
                </div>
              </div>)}
          </div>
          <div className={`mt-12 text-center transition-all duration-1000 delay-1000 transform 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="font-['Open_Sans'] italic text-lg text-[#4A7B38] mb-6">
              ¡Y listo! Disfruta de tu auténtico emparedado de jamón y queso de
              Turrialba.
            </p>
            <div className="inline-block bg-[#A4CC7B] text-white py-2 px-4 rounded-lg">
              <p className="font-['Open_Sans'] font-semibold">
                Consejo: Acompáñalo con un café de la región para una
                experiencia completa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};