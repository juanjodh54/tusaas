import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const body = await req.json();
  const { priceId, success_url, cancel_url } = body;
  const auth = req.headers.get("authorization") || ""; const token = auth.startsWith("Bearer ")?auth.slice(7):null;
  if (!token) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  const supaAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  const { data: userData, error: userErr } = await supaAdmin.auth.getUser(token);
  if (userErr || !userData?.user) return new Response(JSON.stringify({ error: "Invalid user" }), { status: 401 });
  const user = userData.user;
  const { data: prof } = await supaAdmin.from("profiles").select("*").eq("id", user.id).single();
  let customerId = prof?.stripe_customer_id;
  if (!customerId) {
    const customer = await stripe.customers.create({ email: user.email, metadata: { supabase_user_id: user.id } });
    customerId = customer.id;
    await supaAdmin.from("profiles").update({ stripe_customer_id: customerId }).eq("id", user.id);
  }
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    line_items: [{ price: priceId, quantity: 1 }],
    client_reference_id: user.id,
    success_url, cancel_url, allow_promotion_codes: true
  });
  return new Response(JSON.stringify({ url: session.url }));
}
