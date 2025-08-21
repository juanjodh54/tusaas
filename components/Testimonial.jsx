export default function Testimonial({ quote, author, role, avatar }) {
  return (
    <div className="card text-center">
      <div className="flex justify-center mb-6">
        <img 
          src={avatar} 
          alt={author} 
          className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
        />
      </div>
      <blockquote className="text-slate-700 mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div>
        <div className="font-semibold text-slate-900">{author}</div>
        <div className="text-sm text-slate-500">{role}</div>
      </div>
    </div>
  );
}