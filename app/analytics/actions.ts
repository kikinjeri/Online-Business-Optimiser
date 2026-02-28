"use server";

import { supabaseServer } from "@/lib/supabaseServer";

export async function logEvent(eventType: string, restaurantId: string, metadata: any = {}) {
  const supabase = supabaseServer();

  await supabase.from("analytics_events").insert({
    restaurant_id: restaurantId,
    event_type: eventType,
    metadata,
  });
}
