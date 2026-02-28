import { cookies } from "next/headers";
import { supabaseServer } from "@/lib/supabaseServer";
import Menu from "@/components/menus/menu";

export default async function ViewRestaurantPage() {
  const id = cookies().get("selected_restaurant_id")?.value;
  const supabase = supabaseServer();

  const { data: restaurant } = await supabase
    .from("restaurants")
    .select("*")
    .eq("id", id)
    .single();

  const { data: menu } = await supabase
    .from("menus")
    .select("*")
    .eq("restaurant_id", id)
    .order("category_order");

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{restaurant.name}</h1>
      <Menu menu={menu} />
    </main>
  );
}
