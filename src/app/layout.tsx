import "@/styles/globals.css";
import styles from "@/styles/index.module.css";
import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const monster_rat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "abs",
  description: "A link normalizer for personal use.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.main}>
          <div className={`${styles.mainContent} ${monster_rat.className}`}>
            {children}
            <hr />
            <p>
              <small>
                <Link href="https://github.com/MeowcaTheoRange/abs">
                  abs project
                </Link>{" "}
                by <Link href="https://abtmtr.link/">MeowcaTheoRange</Link> ©
                2023
              </small>
              <br />
              <small>
                <code>
                  version: <b>{process.env.VERSION_NUMBER}</b>
                </code>
              </small>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
