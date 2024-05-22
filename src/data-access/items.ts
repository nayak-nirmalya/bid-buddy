import { eq } from "drizzle-orm";

import { database } from "@/db/database";
import { items } from "@/db/schema";

export const getItem = async (itemId: number) =>
  await database.query.items.findFirst({
    where: eq(items.id, itemId),
  });
