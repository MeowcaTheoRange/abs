import { cursorToArray, readMany } from "@/lib/db/crud";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const links = (await cursorToArray(
    readMany("links", { traffic: { $gt: 4 } }, { traffic: -1 }).limit(10)
  )) as (Awaited<any> | null)[];

  return NextResponse.json(links);
}
