export default function ServicesSection() {
  const services = [
    {
      title: "Plomería",
      description: "Reparación de tuberías, fugas, instalación de sanitarios y mantenimiento general.",
      color: "blue",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
          <path d="M20 44V20M20 20L28 12M20 20L12 28M44 20v24M44 44l8-8M44 44l-8-8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Electricidad",
      description: "Instalaciones eléctricas, reparación de cortocircuitos y mantenimiento preventivo.",
      color: "yellow",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
          <path d="M32 8v16M22 14l3 3M42 14l-3 3" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="24" y="24" width="16" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 44v8M36 44v8M28 52h8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 30h4M30 34h4M30 38h4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Cerrajería",
      description: "Apertura de puertas, cambio de cerraduras y duplicado de llaves.",
      color: "orange",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
          <rect x="18" y="28" width="20" height="24" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="28" cy="40" r="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 43v5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 28V20a6 6 0 0112 0v8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="46" cy="32" r="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M46 36v8h-8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Pintura",
      description: "Pintura de interiores y exteriores, retoque y acabados profesionales.",
      color: "pink",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
          <path d="M28 20h8v32h-8z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 16h16v4H24z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 16V8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26 28h12M26 36h12M26 44h12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Carpintería",
      description: "Fabricación y reparación de muebles, puertas y estructuras de madera.",
      color: "green",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
          <path d="M12 32l8-16h24l8 16v16H12V32z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 16v32M44 16v32M32 16v32" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 32h40M12 40h40" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Limpieza",
      description: "Limpieza profunda de hogares, oficinas y mantenimiento regular.",
      color: "cyan",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
          <path d="M32 12v20" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 20l8-8 8 8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 32c0-6.627 5.373-12 12-12s12 5.373 12 12" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 34h28v14a4 4 0 01-4 4H22a4 4 0 01-4-4V34z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26 40v6M32 40v6M38 40v6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Reparación de Electrodomésticos",
      description: "Diagnóstico y reparación de neveras, lavadoras, estufas y más.",
      color: "purple",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
          <rect x="16" y="12" width="32" height="40" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="20" r="2" fill="currentColor"/>
          <circle cx="32" cy="20" r="2" fill="currentColor"/>
          <circle cx="40" cy="20" r="2" fill="currentColor"/>
          <circle cx="32" cy="36" r="8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 30v12M26 36h12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Jardinería",
      description: "Mantenimiento de jardines, poda de árboles y diseño de espacios verdes.",
      color: "lime",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
          <path d="M32 48V32" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 28c-4-8-12-12-16-12 0 8 4 12 8 14" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 28c4-8 12-12 16-12 0 8-4 12-8 14" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 36c-6-2-10-8-10-12 6 0 10 4 12 8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M36 36c6-2 10-8 10-12-6 0-10 4-12 8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 48h16" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const colorClasses = {
    blue: "text-blue-500 bg-blue-50 border-blue-200 hover:border-blue-400",
    yellow: "text-yellow-500 bg-yellow-50 border-yellow-200 hover:border-yellow-400",
    orange: "text-orange-500 bg-orange-50 border-orange-200 hover:border-orange-400",
    pink: "text-pink-500 bg-pink-50 border-pink-200 hover:border-pink-400",
    green: "text-green-600 bg-green-50 border-green-200 hover:border-green-400",
    cyan: "text-cyan-500 bg-cyan-50 border-cyan-200 hover:border-cyan-400",
    purple: "text-purple-500 bg-purple-50 border-purple-200 hover:border-purple-400",
    lime: "text-lime-600 bg-lime-50 border-lime-200 hover:border-lime-400"
  };

  return (
    <section id="servicios" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contamos con profesionales capacitados en múltiples áreas para resolver cualquier necesidad de tu hogar
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white border-2 rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:shadow-xl ${colorClasses[service.color]}`}
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {service.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                <button className="text-gray-900 font-semibold text-sm hover:text-blue-600 transition-colors">
                  Solicitar →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            ¿No encuentras lo que buscas?
          </p>
          <a
            href="https://wa.me/573001234567?text=Hola%2C%20necesito%20ayuda%20con"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          >
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}