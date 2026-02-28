import { supabaseServer } from "@/lib/supabaseServer";
import { selectRestaurant } from "./actions";
import Link from "next/link";

export default async function RestaurantsPage() {
  const supabase = supabaseServer();
  const { data: restaurants } = await supabase
    .from("restaurants")
    .select("*")
    .order("name");

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Restaurants</h1>

      <ul className="space-y-4">
        {restaurants?.map((r) => (
          <li key={r.id} className="border p-4 rounded-lg">
            <div className="font-semibold">{r.name}</div>

            <form action={selectRestaurant}>
              <input type="hidden" name="id" value={r.id} />

              <div className="flex gap-4 mt-2">
                <button
                  formaction="/restaurants/view"
                  className="text-blue-600 underline"
                >
                  View Menu
                </button>

                <button
                  formaction="/restaurants/edit"
                  className="text-blue-600 underline"
                >
                  Edit
                </button>
              </div>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
