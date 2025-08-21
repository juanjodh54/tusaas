import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { return_url } = await req.json();
  const auth = req.headers.get("authorization") || ""; const token = auth.startsWith("Bearer ")?auth.slice(7):null;
  if (!token) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  const supaAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const { data: userData, error: userErr } = await supaAdmin.auth.getUser(token);
  if (userErr || !userData?.user) return new Response(JSON.stringify({ error: "Invalid user" }), { status: 401 });
  const user = userData.user;
  const { data: prof } = await supaAdmin.from("profiles").select("*").eq("id", user.id).single();
  if (!prof?.stripe_customer_id) return new Response(JSON.stringify({ error: "No Stripe customer" }), { status: 400 });
  const portal = await stripe.billingPortal.sessions.create({ customer: prof.stripe_customer_id, return_url });
  return new Response(JSON.stringify({ url: portal.url }));
}
