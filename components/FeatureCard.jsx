export default function FeatureCard({ icon, title, description, bullets = [] }) {
  return (
    <div className="card group hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="check text-sm text-slate-600">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}