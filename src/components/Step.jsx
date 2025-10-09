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
            href="https://www.chatbase.co/n9eZK-TeZ-jyBVL8oBeOz/help"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Solicitar Servicio
          </a>
        </div>
      </div>
    </section>
  );
}
