"use client";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
export default function Login() {
  const [email, setEmail] = useState(""); const [sent, setSent] = useState(false);
  const sendMagicLink = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email, options:{ emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/app` } });
    if (error) alert(error.message); else setSent(true);
  };
  return (
    <div className="max-w-md mx-auto card">
      <h1 className="text-2xl font-bold mb-4">Entrar</h1>
      {sent ? <p>Enlace enviado a <b>{email}</b>.</p> : (
        <form onSubmit={sendMagicLink} className="space-y-4">
          <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="tu@email.com" className="w-full border rounded-xl px-4 py-3"/>
          <button className="btn w-full" type="submit">Enviar enlace</button>
        </form>
      )}
    </div>
  );
}
