export default function CTA({ 
  title = "¿Listo para transformar tu negocio?", 
  description = "Únete a más de 100 empresas que ya han digitalizado sus procesos con nuestros servicios.",
  primaryText = "Ver planes",
  primaryHref = "/precios",
  secondaryText = "Hablar con ventas",
  secondaryHref = "mailto:juanjodh54@gmail.com",
  className = ""
}) {
  return (
    <div className={`card-lg text-center bg-gradient-to-r from-purple-600/5 to-blue-600/5 border-purple-200/50 ${className}`}>
      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={primaryHref} className="btn btn-primary">
          {primaryText}
        </a>
        <a href={secondaryHref} className="btn btn-ghost">
          {secondaryText}
        </a>
      </div>
    </div>
  );
}