import Stripe from "stripe";
import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";
export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = headers().get("stripe-signature");
  const buf = Buffer.from(await req.arrayBuffer());
  let event;
  try { event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET); }
  catch (err) { return new Response(`Webhook Error: ${err.message}`, { status: 400 }); }
  const supaAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const customerId = session.customer; const userId = session.client_reference_id;
    if (userId && customerId) await supaAdmin.from("profiles").update({ stripe_customer_id: customerId }).eq("id", userId);
  }
  if (event.type === "customer.subscription.created" || event.type === "customer.subscription.updated") {
    const sub = event.data.object;
    const rec = {
      stripe_subscription_id: sub.id,
      stripe_customer_id: sub.customer,
      status: sub.status,
      plan: sub.items?.data?.[0]?.price?.nickname || sub.items?.data?.[0]?.price?.id || null,
      current_period_end: new Date(sub.current_period_end * 1000).toISOString()
    };
    const { data: prof } = await supaAdmin.from("profiles").select("id").eq("stripe_customer_id", rec.stripe_customer_id).single();
    if (prof?.id) { rec.user_id = prof.id; await supaAdmin.from("subscriptions").upsert(rec, { onConflict: "stripe_subscription_id" }); }
  }
  return new Response("ok", { status: 200 });
}
