import React, { useEffect, useState, useRef } from 'react';
import { InstagramIcon, FacebookIcon, PhoneIcon } from 'lucide-react';
export const SocialSection = () => {
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
  const socialLinks = [{
    icon: <InstagramIcon size={32} />,
    name: 'Instagram',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  }, {
    icon: <FacebookIcon size={32} />,
    name: 'Facebook',
    color: 'bg-blue-600'
  }, {
    icon: <PhoneIcon size={32} />,
    name: 'WhatsApp',
    color: 'bg-green-500'
  }];
  return <section id="redes" ref={sectionRef} className="py-16 md:py-24 bg-[#F9F5F0] w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#5A3921] mb-12
              transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Síguenos
          </h2>
          <p className={`font-['Open_Sans'] italic text-lg text-[#5A3921] mb-10
              transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Conéctate con nosotros en redes sociales para descubrir más recetas
            tradicionales y novedades.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((social, index) => <div key={index} className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: `${300 + index * 150}ms`
          }}>
                <a href="#" className={`flex flex-col items-center p-6 rounded-lg ${social.color} text-white hover:scale-110 transition-transform duration-300`}>
                  <div className="mb-2">{social.icon}</div>
                  <span className="font-['Montserrat'] font-semibold">
                    {social.name}
                  </span>
                </a>
              </div>)}
          </div>
          <div className={`mt-16 transition-all duration-1000 delay-800 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-lg p-6 shadow-md inline-block">
              <h3 className="font-['Montserrat'] font-bold text-xl text-[#5A3921] mb-3">
                ¡Comparte tu experiencia!
              </h3>
              <p className="font-['Open_Sans'] text-[#5A3921]">
                Usa el hashtag{' '}
                <span className="font-bold text-[#D64A37]">
                  #DeliciasDeTurrialba
                </span>{' '}
                en tus publicaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};