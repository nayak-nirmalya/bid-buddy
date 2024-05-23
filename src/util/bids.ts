import { Item } from "@/db/schema";

export const isBidOver = (item: Item) => item.endDate < new Date();
