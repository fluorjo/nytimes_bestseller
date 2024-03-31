"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import getCategory from "../api";

import styles from "../styles/category.module.css";
import "../public/static/fonts/style.css";

export default function Category() {
  const router = useRouter();
  const [categoryList, setCategoryList] = useState({ results: [] });

  useEffect(() => {
    async function fetchData() {
      const data = await getCategory();
      setCategoryList(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <h1 className={styles.title} >The Nomad Times</h1>
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
    </>
  );
}
