import { Metadata } from "next";
import RootLayout from "./layout";

export const metadata: Metadata = {
  title: "Not Found - abs",
  description: "A link normalizer for personal use.",
};

export default function NotFound() {
  return (
    <RootLayout>
      <h1>Not found</h1>
      <hr />
      <p>The server could not find the requested resource.</p>
      <p>
        <code>Error 404 - Not Found</code>
      </p>
    </RootLayout>
  );
}
