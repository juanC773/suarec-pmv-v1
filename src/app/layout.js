import './globals.css'
import Script from 'next/script'

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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5QJRJF5B');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5QJRJF5B"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
      </body>
    </html>
  )
}