import './globals.css'

export const metadata = {
  title: 'ArreglaYa - Servicios de Emergencia',
  description: 'Servicios rápidos de electricistas y plomería para casos de emergencia. Soluciones en minutos.',
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/dwgawgfvb/image/upload/v1761233045/logo_arreglaYA_a0bn19.jpg',
        sizes: '32x32',
        type: 'image/jpeg',
      },
      {
        url: 'https://res.cloudinary.com/dwgawgfvb/image/upload/v1761233045/logo_arreglaYA_a0bn19.jpg',
        sizes: '16x16',
        type: 'image/jpeg',
      }
    ],
    shortcut: 'https://res.cloudinary.com/dwgawgfvb/image/upload/v1761233045/logo_arreglaYA_a0bn19.jpg',
    apple: 'https://res.cloudinary.com/dwgawgfvb/image/upload/v1761233045/logo_arreglaYA_a0bn19.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
