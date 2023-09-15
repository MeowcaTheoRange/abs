import { cursorToArray, readMany } from "@/lib/db/crud";
import styles from "@/styles/index.module.css";
import Link from "next/link";

export default async function Home() {
  const links = (await cursorToArray(
    readMany("links", { traffic: { $gt: 4 } }, { traffic: -1 }).limit(10)
  )) as (Awaited<any> | null)[];
  return (
    <>
      <h1>{process.env.WHOAMI}</h1>
      <hr />
      <p>A link normalizer for personal use.</p>
      <p>
        <code>
          {process.env.SUBDOMAIN_NAME}.{process.env.DOMAIN_NAME}.
          {process.env.TOPLEVEL_DOMAIN_NAME}
        </code>
      </p>
      {links.length >= 1 ? (
        <>
          <h2>Most popular links</h2>
          <div className={styles.list}>
            {links.map((item, index) => (
              <Link
                className={styles.listItemLink}
                href={item.name}
                key={index}
              >
                <div className={styles.listItem}>
                  <span className={styles.listItemName}>
                    .{process.env.TOPLEVEL_DOMAIN_NAME}/<b>{item.name}</b>
                  </span>
                  <span className={styles.listItemTraffic}>
                    {item.traffic.toLocaleString()} links
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
