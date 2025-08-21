import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TuSaaS – Servicios digitales",
  description: "QR restaurantes, webs y automatizaciones con cobros Stripe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} text-slate-900`}>
        {/* Fondo bonito */}
        <div className="fixed inset-0 -z-10 bg-slate-50" />
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
          <div className="absolute inset-x-0 -top-24 h-72 bg-[radial-gradient(40rem_16rem_at_20%_0%,#c7d2fe,transparent),radial-gradient(40rem_16rem_at_80%_0%,#fecaca,transparent)]"></div>
        </div>

        <header className="sticky top-0 z-20 border-b border-white/20 bg-white/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <a href="/" className="text-xl font-bold tracking-tight">TuSaaS</a>
            <nav className="flex items-center gap-6 text-sm text-slate-600">
              <a href="/servicios" className="hover:text-slate-900">Servicios</a>
              <a href="/precios" className="hover:text-slate-900">Precios</a>
              <a href="/login" className="btn btn-primary">Entrar</a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>

        <footer className="mx-auto max-w-6xl px-6 py-12 text-sm text-slate-500">
          © {new Date().getFullYear()} · TuSaaS
        </footer>
      </body>
    </html>
  );
}
