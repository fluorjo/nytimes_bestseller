"use client";
import { useRouter } from "next/navigation";
import getCategory from "../api";

import styles from "../styles/category.module.css";

export default async function Category() {
  const router = useRouter();
  const categoryList = await getCategory();
  return (
    <div className={styles.container}>
      <div className={styles.divided_container}>
        <div>
          <h2>WEEKLY</h2>
        </div>
        <div className={styles.margin}>
          {categoryList.results
            .filter((l) => l.updated === "WEEKLY")
            .map((l) => (
              <li
                key={l.list_name_encoded}
                onClick={() => router.push(`/list/${l.list_name_encoded}`)}
                style={{ cursor: "pointer" }}
                className={styles.divided_container_li}
              >
                {l.display_name}
              </li>
            ))}
        </div>
      </div>
      <div className={styles.divided_container}>
      <div>
          <h2>MONTHLY</h2>
        </div>
        <div className={styles.margin}>
          {categoryList.results
            .filter((l) => l.updated === "MONTHLY")
            .map((l) => (
              <li
                key={l.list_name_encoded}
                onClick={() => router.push(`/list/${l.list_name_encoded}`)}
                style={{ cursor: "pointer" }}
                className={styles.divided_container_li}
              >
                {l.display_name}
              </li>
            ))}
        </div>
      </div>
    </div>
  );
}
