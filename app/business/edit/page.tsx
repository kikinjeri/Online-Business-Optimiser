import { cookies } from "next/headers";
import { supabaseServer } from "@/lib/supabaseServer";
import Menu from "@/components/menus/menu";
import SampleMenu from "@/components/menus/SampleMenu";

export default async function EditRestaurantPage() {
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
    <main className="max-w-3xl mx-auto py-10 space-y-10">
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">Current Menu</h2>
        <Menu menu={menu} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Sample Menu</h2>
        <SampleMenu />
      </section>
    </main>
  );
}
