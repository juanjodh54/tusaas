"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const plans = [
  { name: "Básico", price: "39€/mes", priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC },
  { name: "Pro", price: "99€/mes", priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO, recommended:true },
  { name: "Business", price: "249€/mes", priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_BUSINESS },
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
      if (!token) { alert("Inicia sesión para continuar."); window.location.href="/login"; return; }
      const res = await fetch("/api/checkout", {
        method: "POST", headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify({ priceId, success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/app`, cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/precios` })
      });
      const { url, error } = await res.json();
      if (error) throw new Error(error);
      window.location.href = url;
    } catch (e) { alert("Error: " + e.message); } finally { setLoading(false); }
  };
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Precios</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p,i)=>(
          <div className="card" key={i}>
            {p.recommended && <div className="text-xs bg-brand text-white inline-block px-2 py-1 rounded-md mb-2">Recomendado</div>}
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-3xl font-bold my-3">{p.price}</p>
            <button className="btn" disabled={!p.priceId || loading} onClick={()=>handleCheckout(p.priceId)}>{loading?"Procesando...":"Elegir plan"}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
