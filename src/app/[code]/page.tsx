import { readOne, updateOne } from "@/lib/db/crud";
import { notFound, redirect } from "next/navigation";

export default async function Page({ params }: { params: { code: string } }) {
  const link = await readOne("links", {
    name: params.code,
  });
  if (link == null) return notFound();
  if (link.traffic != null)
    updateOne(
      "links",
      {
        name: params.code,
      },
      { $inc: { traffic: 1 } }
    );
  return redirect(link.link);
}
