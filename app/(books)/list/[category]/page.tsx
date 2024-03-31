import { Suspense } from "react";
import BookInfo from "../../../../components/book-info";
import styles from "../../../../styles/category.module.css";
export default async function BookList({
  params: { category },
}: {
  params: { category: string };
}) {
  return (
    <div>
      <h1 className={styles.categoryName}>{category.toUpperCase()}</h1>
      <Suspense fallback={<h1>Loading book info</h1>}>
        <BookInfo category={category} />
      </Suspense>
    </div>
  );
}
