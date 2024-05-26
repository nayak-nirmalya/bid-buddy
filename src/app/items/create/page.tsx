"use client";

import React, { useState } from "react";
import { nanoid } from "nanoid";

import {
  createItemAction,
  createUploadUrlAction,
} from "@/app/items/create/actions";
import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreatePage() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <main className="space-y-8">
      <h1 className="text-4xl font-bold">Post an Item</h1>

      <form
        className="flex flex-col border p-8 rounded-xl space-y-4 max-w-lg"
        onSubmit={async (e) => {
          e.preventDefault();

          if (!date) {
            return;
          }

          const form = e.currentTarget as HTMLFormElement;
          const formData = new FormData(form);
          const file = formData.get("file") as File;

          const fileName = nanoid();

          const uploadUrl = await createUploadUrlAction(fileName, file.type);

          await fetch(uploadUrl, {
            method: "PUT",
            body: file,
          });

          const name = formData.get("name") as string;
          const startingPrice = parseFloat(
            formData.get("startingPrice") as string
          );
          const startingPriceInCents = Math.floor(startingPrice * 100);

          await createItemAction({
            name,
            startingPrice: startingPriceInCents,
            fileName,
            endDate: date,
          });
        }}
      >
        <Input
          required
          className="max-w-lg"
          name="name"
          placeholder="Name your item"
        />
        <Input
          required
          className="max-w-lg"
          name="startingPrice"
          type="number"
          step="0.01"
          placeholder="What to start your auction at"
        />
        <Input type="file" name="file"></Input>
        <DatePicker date={date} setDate={setDate} />
        <Button className="self-end" type="submit">
          Post Item
        </Button>
      </form>
    </main>
  );
}
