import Container from '../components/Container';
import Section from '../components/Section';
import LogoWall from '../components/LogoWall';
import FeatureCard from '../components/FeatureCard';
import StepItem from '../components/StepItem';
import BenefitList from '../components/BenefitList';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export const metadata = {
  title: "YouWebServices – Servicios digitales que impulsan tu negocio",
  description: "QR para restaurantes, páginas web profesionales y automatizaciones inteligentes. Transforma tu negocio con nuestros servicios digitales de calidad.",
  openGraph: {
    title: "YouWebServices – Servicios digitales que impulsan tu negocio",
    description: "QR para restaurantes, páginas web profesionales y automatizaciones inteligentes. Transforma tu negocio con nuestros servicios digitales de calidad.",
  },
};

export default function Home() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "QR para restaurantes",
      description: "Moderniza tu carta con códigos QR dinámicos que tus clientes pueden escanear fácilmente.",
      bullets: [
        "Cartas digitales actualizables al instante",
        "Diseño atractivo y responsive",
        "Analytics de visualizaciones",
        "Sin instalaciones complicadas"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
        </svg>
      ),
      title: "Páginas web",
      description: "Sitios web profesionales y e-commerce que convierten visitantes en clientes.",
      bullets: [
        "Diseño moderno y profesional",
        "Optimizado para móviles",
        "SEO incluido",
        "E-commerce completo disponible"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Automatizaciones & Chatbots",
      description: "Automatiza procesos repetitivos y mejora la atención al cliente con IA.",
      bullets: [
        "Chatbots inteligentes 24/7",
        "Automatización de procesos",
        "Integración con tus sistemas",
        "Análisis de conversaciones"
      ]
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Brief inicial",
      description: "Nos cuentas tus necesidades y objetivos en una llamada de 15 minutos",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Contratación",
      description: "Eliges el plan que mejor se adapte y comenzamos de inmediato",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Entrega",
      description: "Recibe tu proyecto terminado con formación y soporte incluido",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "Desde que implementamos el sistema de QR para nuestro restaurante, hemos reducido un 30% las llamadas para consultar la carta y aumentado un 18% el ticket medio. La inversión se pagó sola en dos meses.",
      author: "Carlos Mendoza",
      role: "Propietario, Restaurante La Terraza",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&w=400&h=400&fit=crop"
    },
    {
      quote: "El e-commerce que nos desarrollaron superó todas nuestras expectativas. En 6 meses hemos incrementado las ventas online un 68% y mejorado significativamente la experiencia de nuestros clientes.",
      author: "María González",
      role: "Directora de Marketing, TechStyle",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&w=400&h=400&fit=crop"
    },
    {
      quote: "Las automatizaciones han transformado completamente nuestros procesos internos. Lo que antes nos tomaba horas, ahora se hace automáticamente. Hemos ahorrado un 40% en tiempo operativo.",
      author: "Ana Rodríguez",
      role: "CEO, Digital Innovations",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=srgb&fm=jpg&w=400&h=400&fit=crop"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwYnVzaW5lc3N8ZW58MHx8fHwxNzU1NzQ2NzYzfDA&ixlib=rb-4.1.0&q=85')"
          }}
        />
        <Container>
          <div className="text-center max-w-4xl mx-auto relative">
            <span className="badge mb-6">SaaS para empresas inteligentes</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-shadow-lg">
              Impulsa tu negocio con <span className="gradient-text">servicios digitales</span> profesionales
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transforma tu empresa con QR inteligentes para restaurantes, páginas web que convierten 
              y automatizaciones que ahorran tiempo. Todo en un solo lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/precios" className="btn btn-primary text-lg px-8 py-4">
                Ver planes y precios
              </a>
              <a href="/login" className="btn btn-ghost text-lg px-8 py-4">
                Acceso clientes
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Bar */}
      <Container>
        <LogoWall />
      </Container>

      {/* Services Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Servicios que <span className="gradient-text">transforman empresas</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Soluciones digitales profesionales diseñadas para hacer crecer tu negocio
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section className="bg-slate-50/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              <span className="gradient-text">Cómo funciona</span> nuestro proceso
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tres pasos simples para transformar tu negocio
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <StepItem
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              ¿Por qué elegir <span className="gradient-text">YouWebServices</span>?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              La combinación perfecta de calidad, velocidad y soporte profesional
            </p>
          </div>
          <BenefitList />
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-slate-50/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Lo que dicen nuestros <span className="gradient-text">clientes</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Historias reales de éxito de empresas que confiaron en nosotros
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Preguntas <span className="gradient-text">frecuentes</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>
          <FAQ />
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container>
          <CTA />
        </Container>
      </Section>
    </>
  );
}
