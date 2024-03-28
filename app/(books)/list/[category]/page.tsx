import { Suspense } from "react";
import BookInfo from "../../../../components/book-info";

// export async function generateMetadata({ params: { id } }: IParams) {
//   const movie = await getMovie(id);
//   return {
//     title: movie.title,
//   };
// }

export default async function BookList({
  params: { category },
}: {
  params: { category: string };
}) {
  return (
    <div>
      <h3>Book List Page</h3>
      <Suspense fallback={<h1>Loading book info</h1>}>
        <BookInfo category={category} />
      </Suspense>
    </div>
  );
}