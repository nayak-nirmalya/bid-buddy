import { ItemCard } from "@/app/item-card";
import { database } from "@/db/database";
import { auth } from "@/auth";

export default async function HomePage() {
  const session = await auth();
  const allItems = await database.query.items.findMany();

  return (
    <main className="space-y-8">
      <h1 className="text-4xl font-bold">Items For Sale</h1>

      <div className="grid grid-cols-4 gap-8">
        {allItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            owner={item.userId === session?.user.id}
          />
        ))}
      </div>
    </main>
  );
}
