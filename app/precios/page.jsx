"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const plans = [
  { name: "Básico", price: "39€/mes", priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC, features:["QR ilimitados","Soporte por email"] },
  { name: "Pro", price: "99€/mes", priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO, features:["Todo lo del Básico","Web corporativa","Automatizaciones ligeras"], recommended:true },
  { name: "Business", price: "249€/mes", priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BUSINESS, features:["Pro avanzado","E-commerce","Chatbots a medida"] },
];

export default function Precios() {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session || null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  const handleCheckout = async (priceId) => {
    setLoading(true);
    try {
      const token = session?.access_token;
      if (!token) { window.location.href="/login"; return; }
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({
          priceId,
          success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/app`,
          cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/precios`
        })
      });
      const { url, error } = await res.json();
      if (error) throw new Error(error);
      window.location.href = url;
    } catch (e) { alert("Error: " + e.message); } finally { setLoading(false); }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Precios</h1>
        <p className="mt-2 text-slate-600">Empieza hoy. Cancela cuando quieras.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p,i)=>(
          <div key={i} className={`card ${p.recommended ? "ring-2 ring-indigo-500" : ""}`}>
            {p.recommended && <span className="badge mb-3">Recomendado</span>}
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="my-3 text-3xl font-bold">{p.price}</p>
            <ul className="mb-4 space-y-2 text-sm text-slate-600">
              {p.features.map((f,idx)=>(<li key={idx}>• {f}</li>))}
            </ul>
            <button
              className="btn btn-primary w-full disabled:opacity-50"
              disabled={!p.priceId || loading}
              onClick={()=>handleCheckout(p.priceId)}
            >
              {loading ? "Procesando..." : "Elegir plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
