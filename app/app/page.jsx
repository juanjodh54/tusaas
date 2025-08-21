"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
export default function Dashboard() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session || null); setLoading(false); });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s)=>setSession(s)); return ()=>sub.subscription.unsubscribe();
  }, []);
  const openPortal = async () => {
    const token = session?.access_token;
    const res = await fetch("/api/portal", { method:"POST", headers:{ "Content-Type":"application/json","Authorization":`Bearer ${token}` }, body: JSON.stringify({ return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/app` }) });
    const { url } = await res.json(); if (url) window.location.href = url;
  };
  const logout = async () => { await supabase.auth.signOut(); window.location.href="/"; };
  if (loading) return <p>Cargando…</p>;
  if (!session) return <p>No has iniciado sesión. <a className="btn" href="/login">Entrar</a></p>;
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tu panel</h1>
      <div className="card">
        <h2 className="font-semibold mb-2">Mi cuenta</h2>
        <p>Email: {session.user.email}</p>
        <div className="mt-4 flex gap-3">
          <button className="btn" onClick={openPortal}>Facturas y método de pago</button>
          <button className="btn" onClick={logout}>Salir</button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card"><h3 className="font-semibold">QR restaurantes</h3><p className="text-muted">Próximamente: editor y generación de QR.</p><a className="btn mt-3" href="#">Abrir</a></div>
        <div className="card"><h3 className="font-semibold">Webs</h3><p className="text-muted">Brífing y pagos one‑off con Stripe Payment Links.</p><a className="btn mt-3" href="#">Abrir</a></div>
        <div className="card"><h3 className="font-semibold">Automatizaciones</h3><p className="text-muted">Seguimiento de tareas y soporte.</p><a className="btn mt-3" href="#">Abrir</a></div>
      </div>
    </div>
  );
}
