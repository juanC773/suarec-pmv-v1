export default function HeroSection() {
  return (
    <div id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="text-white text-3xl font-bold tracking-wide">
          ArreglaYa
        </div>
        <a
          href="#contacto"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          Regístrate
        </a>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6 leading-tight max-w-5xl">
          Servicios de Emergencia
          <span className="block text-blue-200 mt-2">en minutos</span>
        </h1>
        
        <p className="text-blue-50 text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed font-light">
          Electricistas y plomeros profesionales disponibles 24/7. Soluciones rápidas para casos de emergencia en tu hogar.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="https://www.chatbase.co/n9eZK-TeZ-jyBVL8oBeOz/help"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-300/50 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            
            Solicitar Servicio
          </a>
          
          <a
            href="#servicios"
            className="bg-blue-500/30 backdrop-blur-sm text-white border-2 border-white/50 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Ver Servicios
          </a>
        </div>

        {/* Trust indicators - VERSIÓN LIMPIA */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 text-white">
          <div className="flex flex-col items-center gap-2">
            <span className="text-6xl font-bold">100+</span>
            <span className="text-blue-100 text-base tracking-wide">Expertos</span>
          </div>

          <div className="h-20 w-px bg-white/30 hidden md:block"></div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-6xl font-bold">100%</span>
            <span className="text-blue-100 text-base tracking-wide">Verificados</span>
          </div>

          <div className="h-20 w-px bg-white/30 hidden md:block"></div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-6xl font-bold">24/7</span>
            <span className="text-blue-100 text-base tracking-wide">Disponible</span>
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}