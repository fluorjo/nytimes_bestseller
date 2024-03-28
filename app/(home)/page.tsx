import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://books-api.nomadcoders.workers.dev/lists";
// export const API_URL = "https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction";

async function getBooks() {

  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const bookList = await getBooks();
  return (
    <div>
      {bookList.results.map((l) => (
        <li key={l.display_name}>
          <Link href={`/books/${l.list_name_encoded}`}>{l.display_name}</Link>
        </li>
      ))}
    </div>
    // <div>
    //   {books.results.books.map((book) => (
    //     <li key={book.rank}>
    //       <Link href={`/books/${book.rank}`}>{book.title}</Link>
    //     </li>
    //   ))}
    // </div>
  );
}