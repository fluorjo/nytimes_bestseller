import { Suspense } from "react";
import BookInfo from "../../../../components/book-info";

export default async function BookList({
  params: { category },
}: {
  params: { category: string };
}) {
  return (
    <div>
      <h3>category: {category}</h3>
      <Suspense fallback={<h1>Loading book info</h1>}>
        <BookInfo category={category} />
      </Suspense>
    </div>
  );
}