import React, { useEffect, useState, useRef } from 'react';

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email, mensaje })
      });

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
        setNombre('');
        setEmail('');
        setMensaje('');
        setTimeout(() => setFormSubmitted(false), 3000);
      } else {
        alert('Error al enviar el mensaje: ' + data.message);
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Ocurrió un error. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" ref={sectionRef} className="py-16 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#5A3921] mb-8 text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            ¿Quieres saber más?
          </h2>
          <p className={`font-['Open_Sans'] italic text-lg text-[#5A3921] mb-8 text-center transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Envíanos tus preguntas, comentarios o solicita información adicional sobre nuestras delicias tradicionales.
          </p>
          <div className={`bg-[#F2E2C4] rounded-lg p-6 md:p-8 shadow-md transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {formSubmitted ? (
              <div className="text-center py-8 px-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4A7B38] rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-[#5A3921] mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="font-['Open_Sans'] text-[#5A3921]">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-['Open_Sans'] font-semibold text-[#5A3921] mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-[#A4CC7B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A7B38] transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-['Open_Sans'] font-semibold text-[#5A3921] mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-[#A4CC7B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A7B38] transition-all"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-['Open_Sans'] font-semibold text-[#5A3921] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-[#A4CC7B] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A7B38] transition-all"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>
                <div className="text-center">
                  <button type="submit" disabled={loading} className="bg-[#D64A37] text-[#F2E2C4] font-bold py-3 px-8 rounded-full hover:scale-105 transition-all duration-300">
                    {loading ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
