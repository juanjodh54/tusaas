export default function Home() {
  return (
    <div className="space-y-10">
      <section className="card">
        <span className="badge">SaaS para pymes</span>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Vende tus servicios <span className="text-indigo-600">como un SaaS</span>
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          QR para restaurantes, webs a medida y automatizaciones/chatbots. Cobros,
          facturas y upgrades con Stripe.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="/precios">Ver precios</a>
          <a className="btn ring-1 ring-slate-200 bg-white/60" href="/login">Entrar</a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="card">
          <h3 className="text-lg font-semibold">QR para restaurantes</h3>
          <p className="mt-2 text-slate-600">Genera tu carta con QR y edítala en segundos.</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Páginas web</h3>
          <p className="mt-2 text-slate-600">Landing o e-commerce con diseño moderno y rápido.</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Automatizaciones & Chatbots</h3>
          <p className="mt-2 text-slate-600">Ahorra tiempo con flujos y bots a medida.</p>
        </div>
      </section>
    </div>
  );
}
