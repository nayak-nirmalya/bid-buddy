import { desc, eq } from "drizzle-orm";

import { database } from "@/db/database";
import { bids } from "@/db/schema";

export const getBidsForItem = async (itemId: number) =>
  await database.query.bids.findMany({
    where: eq(bids.itemId, itemId),
    orderBy: desc(bids.id),
    with: {
      user: {
        columns: {
          image: true,
          name: true,
        },
      },
    },
  });
