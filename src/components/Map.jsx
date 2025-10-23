'use client';

import { useState } from 'react';

export default function ExpertsMap() {
  const [hoveredExpert, setHoveredExpert] = useState(null);

  // Expertos distribuidos por Cali con coordenadas aproximadas - Solo Electricistas y Plomeros
  const experts = [
    // Norte de Cali
    { id: 1, type: "plomeria", name: "Carlos M.", zone: "Norte", x: 45, y: 20, color: "blue" },
    { id: 2, type: "electricidad", name: "Ana G.", zone: "Norte", x: 55, y: 25, color: "yellow" },
    { id: 3, type: "plomeria", name: "Luis P.", zone: "Norte", x: 50, y: 30, color: "blue" },
    
    // Centro
    { id: 4, type: "electricidad", name: "Sofia L.", zone: "Centro", x: 46, y: 50, color: "yellow" },
    { id: 5, type: "plomeria", name: "Roberto C.", zone: "Centro", x: 55, y: 45, color: "blue" },
    { id: 6, type: "electricidad", name: "Jorge H.", zone: "Centro", x: 50, y: 55, color: "yellow" },
    
    // Sur
    { id: 7, type: "plomeria", name: "Miguel T.", zone: "Sur", x: 35, y: 70, color: "blue" },
    { id: 8, type: "electricidad", name: "Laura B.", zone: "Sur", x: 65, y: 75, color: "yellow" },
    { id: 9, type: "plomeria", name: "Alberto F.", zone: "Sur", x: 70, y: 65, color: "blue" },
    
    // Oeste
    { id: 10, type: "electricidad", name: "Claudia N.", zone: "Oeste", x: 30, y: 45, color: "yellow" },
    { id: 11, type: "plomeria", name: "Ricardo S.", zone: "Oeste", x: 25, y: 50, color: "blue" },
    { id: 12, type: "electricidad", name: "Valentina K.", zone: "Oeste", x: 32, y: 35, color: "yellow" },
    
    // Este
    { id: 13, type: "plomeria", name: "Diego L.", zone: "Este", x: 72, y: 45, color: "blue" },
    { id: 14, type: "electricidad", name: "Isabella C.", zone: "Este", x: 75, y: 50, color: "yellow" },
    { id: 15, type: "plomeria", name: "Sebastián H.", zone: "Este", x: 68, y: 55, color: "blue" },
    
    // Distribución adicional estratégica
    { id: 16, type: "electricidad", name: "Andrea P.", zone: "Norte", x: 40, y: 25, color: "yellow" },
    { id: 17, type: "plomeria", name: "Mauricio D.", zone: "Centro", x: 52, y: 42, color: "blue" },
    { id: 18, type: "electricidad", name: "Paola S.", zone: "Sur", x: 48, y: 68, color: "yellow" },
    { id: 19, type: "plomeria", name: "Héctor R.", zone: "Oeste", x: 38, y: 40, color: "blue" },
    { id: 20, type: "electricidad", name: "Lucía M.", zone: "Este", x: 62, y: 48, color: "yellow" },
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
  };

  const colorClasses = {
    blue: "bg-blue-500 border-blue-600",
    yellow: "bg-yellow-500 border-yellow-600",
  };

  return (
    <section id="mapa" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Electricistas y Plomeros Cerca de Ti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 20 profesionales especializados en electricidad y plomería distribuidos por toda Cali
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
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
              <span className="text-sm text-gray-700 font-medium">Tu ubicación</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <span className="text-sm text-gray-700 font-medium">Plomeros disponibles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full border-2 border-white"></div>
              <span className="text-sm text-gray-700 font-medium">Electricistas disponibles</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            Encuentra un experto cerca de ti en segundos
          </p>
          <a
            href="https://www.chatbase.co/n9eZK-TeZ-jyBVL8oBeOz/help"
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