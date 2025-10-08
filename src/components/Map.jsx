'use client';

import { useState } from 'react';

export default function ExpertsMap() {
  const [hoveredExpert, setHoveredExpert] = useState(null);

  // Expertos distribuidos por Cali con coordenadas aproximadas
  const experts = [
    // Norte de Cali
    { id: 1, type: "plomeria", name: "Carlos M.", zone: "Norte", x: 45, y: 20, color: "blue" },
    { id: 2, type: "electricidad", name: "Ana G.", zone: "Norte", x: 55, y: 25, color: "yellow" },
    { id: 3, type: "cerrajeria", name: "Luis P.", zone: "Norte", x: 50, y: 30, color: "orange" },
    
    // Centro
    { id: 4, type: "pintura", name: "María S.", zone: "Centro", x: 48, y: 45, color: "pink" },
    { id: 5, type: "carpinteria", name: "Pedro R.", zone: "Centro", x: 52, y: 48, color: "green" },
    { id: 6, type: "limpieza", name: "Sofia L.", zone: "Centro", x: 46, y: 50, color: "cyan" },
    
    // Sur
    { id: 7, type: "electrodomesticos", name: "Jorge H.", zone: "Sur", x: 50, y: 65, color: "purple" },
    { id: 8, type: "jardineria", name: "Diana V.", zone: "Sur", x: 45, y: 70, color: "lime" },
    { id: 9, type: "plomeria", name: "Roberto C.", zone: "Sur", x: 55, y: 68, color: "blue" },
    
    // Oeste
    { id: 10, type: "electricidad", name: "Carmen A.", zone: "Oeste", x: 30, y: 45, color: "yellow" },
    { id: 11, type: "cerrajeria", name: "Miguel T.", zone: "Oeste", x: 35, y: 50, color: "orange" },
    
    // Este
    { id: 12, type: "pintura", name: "Laura B.", zone: "Este", x: 65, y: 45, color: "pink" },
    { id: 13, type: "carpinteria", name: "Alberto F.", zone: "Este", x: 70, y: 50, color: "green" },
    { id: 14, type: "limpieza", name: "Patricia M.", zone: "Este", x: 68, y: 55, color: "cyan" },
    
    // Más expertos distribuidos
    { id: 15, type: "electrodomesticos", name: "Fernando G.", zone: "Norte", x: 42, y: 28, color: "purple" },
    { id: 16, type: "jardineria", name: "Claudia N.", zone: "Centro", x: 54, y: 52, color: "lime" },
    { id: 17, type: "plomeria", name: "Ricardo S.", zone: "Este", x: 72, y: 48, color: "blue" },
    { id: 18, type: "electricidad", name: "Valentina K.", zone: "Oeste", x: 32, y: 52, color: "yellow" },
  ];

  const icons = {
    plomeria: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
        <path d="M20 44V20M20 20L28 12M20 20L12 28M44 20v24M44 44l8-8M44 44l-8-8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="32" r="6"/>
      </svg>
    ),
    electricidad: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
        <path d="M32 8v16M22 14l3 3M42 14l-3 3" strokeLinecap="round"/>
        <rect x="24" y="24" width="16" height="20" rx="2"/>
      </svg>
    ),
    cerrajeria: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
        <rect x="18" y="28" width="20" height="24" rx="2"/>
        <circle cx="28" cy="40" r="3"/>
        <path d="M22 28V20a6 6 0 0112 0v8" strokeLinecap="round"/>
      </svg>
    ),
    pintura: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
        <path d="M28 20h8v32h-8z"/>
        <path d="M24 16h16v4H24z"/>
        <path d="M32 16V8" strokeLinecap="round"/>
      </svg>
    ),
    carpinteria: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
        <path d="M12 32l8-16h24l8 16v16H12V32z"/>
        <path d="M20 16v32M44 16v32M32 16v32" strokeLinecap="round"/>
      </svg>
    ),
    limpieza: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
        <path d="M32 12v20M24 20l8-8 8 8" strokeLinecap="round"/>
        <path d="M18 34h28v14a4 4 0 01-4 4H22a4 4 0 01-4-4V34z"/>
      </svg>
    ),
    electrodomesticos: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
        <rect x="16" y="12" width="32" height="40" rx="2"/>
        <circle cx="32" cy="36" r="8"/>
      </svg>
    ),
    jardineria: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
        <path d="M32 48V32M32 28c-4-8-12-12-16-12 0 8 4 12 8 14" strokeLinecap="round"/>
        <path d="M32 28c4-8 12-12 16-12 0 8-4 12-8 14" strokeLinecap="round"/>
      </svg>
    ),
  };

  const colorClasses = {
    blue: "bg-blue-500 border-blue-600",
    yellow: "bg-yellow-500 border-yellow-600",
    orange: "bg-orange-500 border-orange-600",
    pink: "bg-pink-500 border-pink-600",
    green: "bg-green-600 border-green-700",
    cyan: "bg-cyan-500 border-cyan-600",
    purple: "bg-purple-500 border-purple-600",
    lime: "bg-lime-600 border-lime-700"
  };

  return (
    <section id="map" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Expertos Cerca de Ti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 100 profesionales verificados distribuidos por toda la ciudad de Cali
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 max-w-5xl mx-auto">
          <div className="relative w-full h-[500px] md:h-[600px] lg:aspect-square rounded-2xl border-4 border-blue-200 overflow-hidden">
            {/* Google Maps Embed de Cali */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127289.56207796146!2d-76.5624694!3d3.4516467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0cc4bb3f1%3A0x1f0fb5e952ae6168!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1sen!2sco!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full absolute inset-0"
            ></iframe>

            {/* Expertos en el mapa */}
            {experts.map((expert) => (
              <div
                key={expert.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                style={{ left: `${expert.x}%`, top: `${expert.y}%` }}
                onMouseEnter={() => setHoveredExpert(expert)}
                onMouseLeave={() => setHoveredExpert(null)}
              >
                {/* Pulso de animación */}
                <div className={`absolute inset-0 ${colorClasses[expert.color]} rounded-full animate-ping opacity-30`}></div>
                
                {/* Icono del experto */}
                <div className={`relative w-10 h-10 ${colorClasses[expert.color]} rounded-full border-2 p-1.5 text-white shadow-lg group-hover:scale-125 transition-transform duration-200`}>
                  {icons[expert.type]}
                </div>

                {/* Tooltip al hacer hover */}
                {hoveredExpert?.id === expert.id && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl z-20">
                    <div className="font-bold">{expert.name}</div>
                    <div className="text-xs text-gray-300 capitalize">{expert.type.replace('_', ' ')}</div>
                    <div className="text-xs text-gray-400">{expert.zone}</div>
                    {/* Flecha */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                )}
              </div>
            ))}

            {/* Tu ubicación (punto rojo en el centro) */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-40"></div>
                <div className="relative w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                Tu ubicación
              </div>
            </div>
          </div>

          {/* Leyenda */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
              <span className="text-sm text-gray-700 font-medium">Tu ubicación</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <span className="text-sm text-gray-700 font-medium">Expertos disponibles</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            Encuentra un experto cerca de ti en segundos
          </p>
          <a
            href="https://wa.me/573001234567?text=Hola%2C%20necesito%20un%20experto%20cerca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
          >
            Solicitar Servicio Ahora
          </a>
        </div>
      </div>
    </section>
  );
}