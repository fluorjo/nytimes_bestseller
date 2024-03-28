import Link from "next/link";
import { API_URL } from "../app/(home)/page";

async function getBook(category: string) {
  const response = await fetch(`${API_URL}/list?name=${category}`);
  return response.json();
}

export default async function BookInfo({ category }: { category: string }) {
  const books = await getBook(category);
  return  <div>
    {books.results.books.map((book) => (
      <li key={book.rank}>
        <Link href={`/books/${book.rank}`}>{book.title}</Link>
      </li>
    ))}
  </div>
}