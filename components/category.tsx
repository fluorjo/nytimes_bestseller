import Link from "next/link";
import { API_URL } from "../api";

import styles from "../styles/category.module.css";
async function getCategory() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json;
}

export default async function Category() {
  const categoryList = await getCategory();
  return (
    <div className={styles.container}>
      {categoryList.results.map((l) => (
        <li key={l.display_name}>
          <Link href={`/list/${l.list_name_encoded}`}>{l.display_name}</Link>
        </li>
      ))}
    </div>
  );
}
