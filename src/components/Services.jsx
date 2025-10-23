export default function ServicesSection() {
  const services = [
    {
      title: "Plomería de Emergencia",
      subtitle: "24/7 • Respuesta inmediata",
      description: "Fugas, desagües tapados, tuberías rotas y más",
      features: [
        "Fugas de agua urgentes",
        "Desagües tapados", 
        "Tuberías rotas",
        "Sanitarios y grifos",
        "Calentadores de agua"
      ],
      color: "blue",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
          <path d="M20 44V20M20 20L28 12M20 20L12 28M44 20v24M44 44l8-8M44 44l-8-8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Electricidad de Emergencia", 
      subtitle: "24/7 • Respuesta inmediata",
      description: "Cortocircuitos, fallas eléctricas y problemas de energía",
      features: [
        "Cortocircuitos urgentes",
        "Tableros eléctricos",
        "Problemas de iluminación", 
        "Tomas y enchufes",
        "Electrodomésticos"
      ],
      color: "yellow",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
          <path d="M32 8v16M22 14l3 3M42 14l-3 3" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="24" y="24" width="16" height="20" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 44v8M36 44v8M28 52h8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 30h4M30 34h4M30 38h4" strokeLinecap="round" strokeLinejoin="round"/>
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
            Servicios de Emergencia
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Especialistas en electricidad y plomería disponibles 24/7 para resolver tus emergencias rápidamente
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white border-2 rounded-3xl p-8 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:-translate-y-2 ${colorClasses[service.color]}`}
            >
              {/* Header con icono y badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {service.subtitle}
                </div>
              </div>

              {/* Título y descripción */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {service.description}
                </p>
              </div>

              {/* Lista de características */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón de acción */}
              <div className="text-center">
                <a
                  href="https://www.chatbase.co/n9eZK-TeZ-jyBVL8oBeOz/help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Solicitar Ahora →
                </a>
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
            href="https://www.chatbase.co/n9eZK-TeZ-jyBVL8oBeOz/help"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}