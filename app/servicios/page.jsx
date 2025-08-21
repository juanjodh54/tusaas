export default function Servicios() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Servicios</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card"><h2 className="text-xl font-semibold">QR para restaurantes</h2><p className="text-muted mt-2">Plan desde 9€/mes. Edición del menú y descarga de QR.</p></div>
        <div className="card"><h2 className="text-xl font-semibold">Páginas web</h2><p className="text-muted mt-2">Estáticas desde 199€. E‑commerce desde 799€.</p></div>
        <div className="card"><h2 className="text-xl font-semibold">Automatizaciones & Chatbots</h2><p className="text-muted mt-2">Planes mensuales con horas incluidas.</p></div>
      </div>
    </div>
  );
}
