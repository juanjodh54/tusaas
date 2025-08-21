export default function Home() {
  return (
    <div className="space-y-8">
      <section className="card">
        <h1 className="text-4xl font-bold mb-3">Vende tus servicios como un SaaS</h1>
        <p className="text-lg text-muted">QR para restaurantes, webs a medida y automatizaciones/chatbots. Cobros, facturas y upgrades con Stripe.</p>
        <div className="mt-6 flex gap-3">
          <a className="btn" href="/precios">Ver precios</a>
          <a className="btn" href="/login">Entrar</a>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {t:"QR para restaurantes", d:"Genera y gestiona tus cartas con QR, edítalas al instante."},
          {t:"Páginas web", d:"Landing estática o e‑commerce. Entrega rápida, diseño moderno."},
          {t:"Automatizaciones & Chatbots", d:"Ahorra tiempo con flujos y bots a medida."},
        ].map((x, i) => (
          <div key={i} className="card">
            <h3 className="text-xl font-semibold">{x.t}</h3>
            <p className="text-muted mt-2">{x.d}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
