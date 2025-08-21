import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta"
});

export const metadata = {
  title: "YouWebServices – Servicios digitales profesionales",
  description: "QR para restaurantes, páginas web y automatizaciones. Impulsa tu negocio con nuestros servicios digitales.",
  keywords: ["QR restaurantes", "páginas web", "automatizaciones", "chatbots", "servicios digitales"],
  authors: [{ name: "YouWebServices" }],
  openGraph: {
    title: "YouWebServices – Servicios digitales profesionales",
    description: "QR para restaurantes, páginas web y automatizaciones. Impulsa tu negocio con nuestros servicios digitales.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body className={`${jakarta.className} font-jakarta text-slate-900 antialiased`}>
        {/* Fondo con gradiente de marca */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 to-slate-100" />
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-40">
          <div className="absolute inset-x-0 -top-24 h-96 bg-[radial-gradient(50rem_20rem_at_30%_0%,#7c3aed,transparent),radial-gradient(50rem_20rem_at_70%_0%,#2563eb,transparent)]"></div>
        </div>

        <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-lg">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center">
              <img src="/logo.svg" alt="YouWebServices" className="h-8" />
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="/servicios" className="hover:text-slate-900 transition-colors">Servicios</a>
              <a href="/precios" className="hover:text-slate-900 transition-colors">Precios</a>
              <a href="/casos" className="hover:text-slate-900 transition-colors">Casos de éxito</a>
              <a href="/login" className="btn btn-primary">Entrar</a>
            </nav>
            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="md:col-span-2">
                <img src="/logo-mono.svg" alt="YouWebServices" className="h-8 mb-4 opacity-90" />
                <p className="text-slate-300 mb-6 max-w-md">
                  Transformamos tu negocio con servicios digitales profesionales. 
                  QR para restaurantes, páginas web y automatizaciones.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Servicios</h3>
                <ul className="space-y-2 text-slate-300">
                  <li><a href="/servicios" className="hover:text-white transition-colors">QR Restaurantes</a></li>
                  <li><a href="/servicios" className="hover:text-white transition-colors">Páginas Web</a></li>
                  <li><a href="/servicios" className="hover:text-white transition-colors">Automatizaciones</a></li>
                  <li><a href="/servicios" className="hover:text-white transition-colors">Chatbots</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Empresa</h3>
                <ul className="space-y-2 text-slate-300">
                  <li><a href="/casos" className="hover:text-white transition-colors">Casos de éxito</a></li>
                  <li><a href="/precios" className="hover:text-white transition-colors">Precios</a></li>
                  <li><a href="mailto:juanjodh54@gmail.com" className="hover:text-white transition-colors">Contacto</a></li>
                  <li><a href="/dashboard" className="hover:text-white transition-colors">Acceso clientes</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} YouWebServices. Todos los derechos reservados.
              </p>
              <div className="flex gap-6 text-sm text-slate-400 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}