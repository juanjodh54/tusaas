"use client";
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué incluyen los planes de suscripción?",
      answer: "Cada plan incluye diferentes servicios según tus necesidades: QR ilimitados, páginas web, automatizaciones y chatbots. El soporte técnico está incluido en todos los planes."
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer: "Sí, puedes actualizar o reducir tu plan en cualquier momento desde tu panel de control. Los cambios se aplican en el siguiente ciclo de facturación."
    },
    {
      question: "¿Hay compromisos de permanencia?",
      answer: "No hay compromisos de permanencia. Puedes cancelar tu suscripción en cualquier momento y mantendrás acceso hasta el final del período pagado."
    },
    {
      question: "¿Qué tipo de soporte técnico ofrecéis?",
      answer: "Ofrecemos soporte por email en todos los planes, con tiempo de respuesta de 24-48h. Los planes Pro y Business incluyen soporte prioritario con respuesta en menos de 12h."
    },
    {
      question: "¿Los servicios one-time tienen garantía?",
      answer: "Sí, todos nuestros servicios one-time (páginas web, automatizaciones) incluyen 30 días de revisiones gratuitas y 3 meses de soporte técnico básico."
    },
    {
      question: "¿Trabajáis con empresas de todos los tamaños?",
      answer: "Sí, trabajamos desde autónomos y pequeñas empresas hasta medianas empresas. Adaptamos nuestros servicios a las necesidades específicas de cada cliente."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="card">
            <button
              className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
              <div className={`flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`mt-4 transition-all duration-200 ${openIndex === index ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}
            >
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}