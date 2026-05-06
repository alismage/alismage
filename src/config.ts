export const BUSINESS_CONFIG = {
  name: "Alis Mage",
  phone: "58908743", // Asegúrate de incluir el código de país si es necesario (ej: 50258908743)
  whatsappUrl: (message: string) => `https://api.whatsapp.com/send?phone=58908743&text=${encodeURIComponent(message)}`,
  instagram: "https://instagram.com/alismage",
  email: "contacto@alismage.com",
  address: "Tu Dirección Aquí, Ciudad",
  socialProof: {
    rating: "4.9/5",
    clients: "+100"
  }
};

export const DEVELOPER_CONFIG = {
  name: "STUDIO LEXAIR",
  email: "studio.lexair@gmail.com",
  phone: "52678747",
  whatsappUrl: (message: string) => `https://api.whatsapp.com/send?phone=52678747&text=${encodeURIComponent(message)}`
};
