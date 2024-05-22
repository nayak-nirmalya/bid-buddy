import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function EmptyState() {
  return (
    <div className="space-y-8 flex flex-col items-center justify-center">
      <Image src="/package.svg" width="200" height="200" alt="Package" />
      <h2 className="text-2xl font-bold">You have no auctions yet</h2>
      <Button asChild>
        <Link href="/items/create">Create Auction</Link>
      </Button>
    </div>
  );
}
