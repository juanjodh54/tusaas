import "./globals.css";
export const metadata = { title:"Tu SaaS", description:"Servicios: QR, webs y automatizaciones" };
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="container py-4 flex items-center justify-between">
          <a href="/" className="font-bold text-xl">TuSaaS</a>
          <nav className="flex gap-4">
            <a href="/servicios">Servicios</a>
            <a href="/precios">Precios</a>
            <a href="/login" className="btn">Entrar</a>
          </nav>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="container py-10 text-sm text-muted">© {new Date().getFullYear()} · TuSaaS</footer>
      </body>
    </html>
  );
}
