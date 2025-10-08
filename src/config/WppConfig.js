export const WHATSAPP_CONFIG = {
  phone: '573105123456', 
  defaultMessage: 'Hola, necesito ayuda con...'
};

export const getWhatsAppLink = (customMessage) => {
  const message = customMessage || WHATSAPP_CONFIG.defaultMessage;
  return `https://wa.me/${WHATSAPP_CONFIG.phone}?text=${encodeURIComponent(message)}`;
};