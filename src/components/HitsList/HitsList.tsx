"use client";
import { getRelativeTimeString } from "@/utility/relative";
import styles from "./HitsList.module.css";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HitsList({ tld }: { tld: string }) {
  const [links, setLinks] = useState<
    { name: string; traffic: number; url: string; lastHit: number }[]
  >([]);
  useEffect(() => {
    fetch("/api/pop/").then((res) =>
      res.json().then((json) => {
        setLinks(json);
      })
    );
  });
  return links.length >= 1 ? (
    <>
      <h2>Most popular links</h2>
      <div className={styles.list}>
        {links.map((item, index) => (
          <Link className={styles.listItemLink} href={item.name} key={index}>
            <div className={styles.listItem}>
              <span className={styles.listItemName}>
                .{tld}/<b>{item.name}</b>
              </span>
              <span className={styles.listItemTraffic}>
                <b>{item.traffic.toLocaleString()}</b> links
              </span>
              <span className={styles.listItemDate}>
                <small>
                  Last linked <b>{getRelativeTimeString(item.lastHit)}</b>
                </small>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <></>
  );
}
