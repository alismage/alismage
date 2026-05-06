import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  Droplets, 
  ChevronRight,
  Menu,
  X,
  Star,
  ShieldCheck,
  Send,
  MapPin,
  Clock,
  Home
} from 'lucide-react';
import { BUSINESS_CONFIG, DEVELOPER_CONFIG } from './config';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="min-h-screen bg-white font-['Montserrat'] text-slate-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-3xl font-['Dancing_Script'] font-bold ${scrolled ? 'text-purple-600' : 'text-white md:text-purple-600'}`}>
              Alis Mage
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium transition-colors hover:text-purple-500 ${scrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={BUSINESS_CONFIG.whatsappUrl("¡Hola! Me gustaría agendar una cita.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition-transform hover:scale-105 shadow-lg"
            >
              <MessageCircle size={18} />
              AGENDA TU CITA
            </a>
          </div>

          <button 
            className="md:hidden text-purple-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-purple-600' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl py-6 flex flex-col items-center space-y-4 animate-fade-in-down">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-700 font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={BUSINESS_CONFIG.whatsappUrl("¡Hola! Me gustaría agendar una cita.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
            >
              <MessageCircle size={20} />
              AGENDA TU CITA
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_hair.jpg" 
            alt="Cabello liso y brillante perfectamente alisado por Alis Mage" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
          <div className="max-w-2xl">
            {/* Social Proof & Home Service Badge */}
            <div className="flex flex-wrap gap-3 mb-6 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400" />)}
                </div>
                <span className="text-sm font-medium tracking-wide">
                  {BUSINESS_CONFIG.socialProof.rating} — {BUSINESS_CONFIG.socialProof.clients} clientas
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-pink-500/80 backdrop-blur-md px-4 py-2 rounded-full border border-pink-400/30">
                <Home size={14} className="text-white" />
                <span className="text-sm font-bold tracking-wide">¡Servicio a Domicilio!</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold leading-[1.1] mb-4 md:mb-6">
              ¡Dile adiós al frizz y luce un <br />
              <span className="text-pink-300 italic">cabello radiante!</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-100 mb-6 md:mb-8 max-w-lg leading-relaxed px-1 md:px-0">
              Especialistas en Keratina, Botox Capilar e Hidratación Profunda con productos de alta gama. Resultados 100% garantizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={BUSINESS_CONFIG.whatsappUrl("¡Hola Alis! Quiero reservar mi transformación ahora.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white text-lg sm:text-xl px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold flex items-center justify-center gap-3 transition-all active:scale-95 shadow-2xl"
              >
                <MessageCircle size={24} className="flex-shrink-0" />
                <span className="text-center">¡Reserva tu transformación!</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-pink-200 rounded-2xl z-0"></div>
              <img 
                src="/images/stylist.jpg" 
                alt="Estilista profesional Alis Mage" 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/hero_hair.jpg";
                }}
                className="w-full h-auto rounded-2xl shadow-2xl relative z-10 object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden lg:block border border-pink-100">
                <p className="text-purple-600 font-bold text-lg italic">"Tu cabello, nuestra magia"</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-pink-500 font-['Dancing_Script'] text-3xl mb-2">Sobre Alis Mage</h2>
              <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold mb-6 text-slate-800 leading-tight">
                Salud Capilar y Confianza en cada Tratamiento
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                En Alis Mage entendemos que tu cabello habla por ti. No es solo estética, es salud capilar y confianza en ti misma. 
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Usamos productos de alta gama para sanar tu fibra capilar desde el interior y dejar un brillo espejo que dura semanas. <strong>¡Ahora también llevamos el salón a tu casa con nuestro servicio exclusivo a domicilio!</strong>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Productos Premium",
                  "Atención Personalizada",
                  "Resultados Garantizados",
                  "Servicio a Domicilio"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-purple-500 flex-shrink-0" size={20} />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog & Services Section */}
      <section id="servicios" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 mb-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-purple-500 font-['Dancing_Script'] text-3xl mb-2">Catálogo de Magia</h2>
              <h3 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-slate-800">Tratamientos Exclusivos</h3>
            </div>
            <div className="hidden md:block">
              <img 
                src="/images/service_keratin.jpg" 
                alt="Detalle de tratamiento profesional" 
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/images/before1.jpg";
                }}
                className="w-48 h-48 object-cover rounded-full border-4 border-pink-100 shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Keratina Orgánica",
                icon: <Sparkles className="text-purple-500" />,
                desc: "Liso espejo y 0% frizz. Resultados de 3 a 6 meses.",
                ideal: "Cabellos rebeldes y con mucho volumen.",
                color: "bg-purple-50",
                border: "border-purple-100",
                msg: "Hola Alis Mage! Me interesa info sobre la Keratina Orgánica.",
                price: "Consultar"
              },
              {
                title: "Botox Capilar",
                icon: <Star className="text-pink-500" />,
                desc: "Rejuvenecimiento total y sellado de puntas abiertas.",
                ideal: "Cabellos procesados o quebradizos.",
                color: "bg-pink-50",
                border: "border-pink-100",
                msg: "Hola Alis Mage! Me interesa info sobre el Botox Capilar.",
                price: "Consultar"
              },
              {
                title: "Cirugía Capilar",
                icon: <Droplets className="text-blue-500" />,
                desc: "Hidratación extrema con alisado de caída natural.",
                ideal: "Buscan brillo sin perder el movimiento.",
                color: "bg-blue-50",
                border: "border-blue-100",
                msg: "Hola Alis Mage! Me interesa info sobre la Cirugía Capilar.",
                price: "Consultar"
              },
              {
                title: "Brillo de Diamante",
                icon: <Sparkles className="text-yellow-500" />,
                desc: "Baño de luz y nutrición profunda instantánea.",
                ideal: "Mantenimiento mensual y suavidad.",
                color: "bg-yellow-50",
                border: "border-yellow-100",
                msg: "Hola Alis Mage! Me interesa info sobre el Brillo de Diamante.",
                price: "Consultar"
              }
            ].map((s, i) => (
              <div key={i} className={`${s.color} border ${s.border} p-8 rounded-[2rem] flex flex-col h-full transition-all hover:shadow-xl hover:-translate-y-1`}>
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">{s.title}</h4>
                <p className="text-purple-600 font-bold text-sm mb-3">Desde: {s.price}</p>
                <p className="text-slate-600 text-sm mb-4 flex-grow">{s.desc}</p>
                <div className="bg-white/50 p-3 rounded-xl mb-6 border border-white/50">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Ideal para:</p>
                  <p className="text-xs text-slate-700 italic">{s.ideal}</p>
                </div>
                <a 
                  href={BUSINESS_CONFIG.whatsappUrl(s.msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white text-slate-800 rounded-xl font-bold text-center text-sm shadow-sm hover:bg-slate-800 hover:text-white transition-colors"
                >
                  ¡Quiero este cambio!
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="resultados" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center mb-12">
          <h2 className="text-pink-400 font-['Dancing_Script'] text-2xl sm:text-3xl mb-2 italic">El poder de la transformación</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-['Playfair_Display'] font-bold italic">Nuestros Resultados</h3>
        </div>

        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
            <div className="space-y-4">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                <div className="relative group">
                  <img src="/images/before1.jpg" alt="Antes del tratamiento - Cabello con frizz" className="w-full h-[300px] sm:h-[400px] object-cover rounded-2xl" />
                  <div className="absolute top-3 left-3 bg-black/60 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Antes</div>
                </div>
                <div className="relative group">
                  <img src="/images/after1.jpg" alt="Después del tratamiento - Liso espejo" className="w-full h-[300px] sm:h-[400px] object-cover rounded-2xl border-2 border-pink-500/30" />
                  <div className="absolute top-3 right-3 bg-pink-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Después</div>
                </div>
              </div>
              <p className="text-center text-slate-400 italic font-medium text-sm sm:text-base">Tratamiento de Keratina Alisado Espejo</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <img src="/images/before2.jpg" alt="Antes del tratamiento - Cabello opaco" className="w-full h-[400px] object-cover rounded-2xl" />
                  <div className="absolute top-4 left-4 bg-black/60 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Antes</div>
                </div>
                <div className="relative group">
                  <img src="/images/after2.jpg" alt="Después del tratamiento - Brillo y salud" className="w-full h-[400px] object-cover rounded-2xl border-2 border-purple-500/30" />
                  <div className="absolute top-4 right-4 bg-purple-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Después</div>
                </div>
              </div>
              <p className="text-center text-slate-400 italic font-medium">Nutrición Profunda con Botox Capilar</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-purple-500 font-['Dancing_Script'] text-3xl mb-2">¿Tienes dudas?</h2>
            <h3 className="text-center text-4xl font-['Playfair_Display'] font-bold text-slate-800 mb-12">Preguntas Frecuentes</h3>
            
            <div className="space-y-4">
              {[
                {
                  q: "¿Cuánto tiempo duran los resultados?",
                  a: "Depende del tratamiento. La Keratina dura entre 3 a 6 meses, mientras que el Botox e Hidratación profunda suelen durar de 1 a 2 meses con los cuidados adecuados."
                },
                {
                  q: "¿Puedo lavarme el cabello el mismo día?",
                  a: "En la mayoría de nuestros tratamientos de alta gama, ¡sí! Sin embargo, para resultados óptimos, siempre te daremos las indicaciones específicas."
                },
                {
                  q: "¿Es necesario agendar con antelación?",
                  a: "Sí, para garantizarte una atención exclusiva y sin prisas, trabajamos únicamente bajo cita previa."
                },
                {
                  q: "¿Cómo funciona el servicio a domicilio?",
                  a: "Llevamos todo el equipo profesional y productos necesarios hasta tu hogar. Solo necesitamos un espacio cómodo con conexión eléctrica. ¡Tú solo relájate!"
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-600 leading-relaxed pl-4 border-l-2 border-pink-100 ml-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section id="contacto" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-pink-500 font-['Dancing_Script'] text-3xl mb-2 italic">Agenda Abierta</h2>
              <h3 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-slate-800 mb-8 leading-tight">
                ¡Quiero ayudarte a tener el <br /> cabello que soñaste!
              </h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">WhatsApp</h4>
                    <p className="text-slate-600">{BUSINESS_CONFIG.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Horario de Atención</h4>
                    <p className="text-slate-600">Lunes a Sábado: 8:30 AM - 7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                    <Home size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Servicio a Domicilio</h4>
                    <p className="text-slate-600">Atención profesional en la comodidad de tu hogar.</p>
                  </div>
                </div>
              </div>

              <a 
                href={BUSINESS_CONFIG.whatsappUrl("¡Hola Alis! Me interesa una cita a domicilio, ¿me das información?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-transform"
              >
                <MessageCircle size={24} />
                Escríbeme directamente
              </a>
            </div>

            <div className="lg:w-1/2 bg-slate-50 p-8 md:p-12 rounded-[3rem] shadow-inner">
              <h4 className="text-2xl font-bold text-slate-800 mb-6">Pide información</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nombre completo</label>
                  <input type="text" placeholder="Ej. Maria Lopez" className="w-full px-5 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Número de WhatsApp</label>
                  <input type="tel" placeholder="Ej. 58908743" className="w-full px-5 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">¿En qué tratamiento estás interesada?</label>
                  <select className="w-full px-5 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white">
                    <option>Seleccionar opción</option>
                    <option>Keratina Orgánica</option>
                    <option>Botox Capilar</option>
                    <option>Cirugía Capilar</option>
                    <option>Brillo de Diamante</option>
                  </select>
                </div>
                <button className="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors">
                  <Send size={20} />
                  Enviar solicitud
                </button>
                <p className="text-xs text-slate-400 text-center mt-4 italic">
                  Tus datos están seguros con nosotros según nuestra Política de Privacidad.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-['Dancing_Script'] font-bold text-pink-400 mb-2">
                Alis Mage
              </div>
              <p className="text-slate-400 italic text-sm mb-6">Realza tu belleza, cuida tu salud capilar.</p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href={BUSINESS_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-pink-500 transition-colors">
                  <Camera size={20} />
                </a>
                <a href={BUSINESS_CONFIG.whatsappUrl("¡Hola!")} className="p-3 bg-white/5 rounded-full hover:bg-green-500 transition-colors">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            {/* Developer Credits Section */}
            <div className="w-full lg:w-auto bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 text-center lg:text-left">
              <h5 className="text-pink-300 font-bold text-sm uppercase tracking-widest mb-4">Desarrollado por</h5>
              <div className="flex flex-col items-center lg:items-start gap-4">
                <div className="text-xl font-bold tracking-tighter text-white">
                  {DEVELOPER_CONFIG.name}
                </div>
                <p className="text-slate-400 text-xs max-w-[250px]">
                  ¿Quieres una página profesional como esta? ¡Contáctanos!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <a 
                    href={`mailto:${DEVELOPER_CONFIG.email}`}
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-xs transition-colors border border-white/10"
                  >
                    <Send size={14} />
                    {DEVELOPER_CONFIG.email}
                  </a>
                  <a 
                    href={DEVELOPER_CONFIG.whatsappUrl("Hola Studio Lexair, vi la página de Alis Mage y me gustaría cotizar mi web.")}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-xl text-xs font-bold transition-transform hover:scale-105"
                  >
                    <MessageCircle size={14} />
                    WhatsApp Studio
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 Alis Mage - Todos los derechos reservados
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Política de Privacidad</a>
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Enhanced Floating WhatsApp Button */}
      <a 
        href={BUSINESS_CONFIG.whatsappUrl("¡Hola Alis! Quiero eliminar el frizz, ¿me ayudas?")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 group"
      >
        <span className="bg-white text-slate-800 px-4 py-2 rounded-full font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          ¡Escríbeme! 💬
        </span>
        <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse-slow">
          <MessageCircle size={32} />
        </div>
      </a>
    </div>
  );
};

export default App;
