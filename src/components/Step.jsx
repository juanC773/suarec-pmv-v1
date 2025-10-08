export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Solicita el Servicio",
      description: "Cuéntanos qué necesitas a través de WhatsApp. Describe el problema y tu ubicación en Cali.",
      color: "blue"
    },
    {
      number: "2",
      title: "Te Conectamos con un Experto",
      description: "En minutos, te asignamos un profesional verificado cerca de tu ubicación. Recibes su información y tiempo estimado de llegada.",
      color: "green"
    },
    {
      number: "3",
      title: "Recibe Atención Profesional",
      description: "El experto llega a tu hogar con las herramientas necesarias. Resuelve tu problema de forma rápida y profesional.",
      color: "purple"
    }
  ];

  const colorClasses = {
    blue: {
      text: "text-blue-600",
      bg: "bg-blue-600",
      lightBg: "bg-blue-50",
      border: "border-blue-200",
      hoverBorder: "hover:border-blue-400"
    },
    green: {
      text: "text-green-600",
      bg: "bg-green-600",
      lightBg: "bg-green-50",
      border: "border-green-200",
      hoverBorder: "hover:border-green-400"
    },
    purple: {
      text: "text-purple-600",
      bg: "bg-purple-600",
      lightBg: "bg-purple-50",
      border: "border-purple-200",
      hoverBorder: "hover:border-purple-400"
    }
  };

  return (
    <section id="como-funciona"className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tres pasos sencillos para conectarte con expertos verificados
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-10 border-2 ${colorClasses[step.color].border} ${colorClasses[step.color].hoverBorder} hover:shadow-2xl transition-all duration-300`}
            >
              {/* Número Grande */}
              <div className="mb-8">
                <span className={`text-9xl font-black ${colorClasses[step.color].text} opacity-20 block leading-none`}>
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative -mt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>

              {/* Decorative Circle */}
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 ${colorClasses[step.color].lightBg} rounded-full -z-10 group-hover:scale-110 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/573001234567?text=Hola%2C%20necesito%20ayuda%20con"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Solicitar Servicio
          </a>
        </div>
      </div>
    </section>
  );
}
