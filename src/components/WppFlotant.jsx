export default function ChatBotButton() {
  const chatbotUrl = "https://www.chatbase.co/n9eZK-TeZ-jyBVL8oBeOz/help";

  return (
    <a
      href={chatbotUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl group"
    >
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
      <span className="font-semibold text-sm sm:text-base">Solicitar Servicio</span>
    </a>
  );
}