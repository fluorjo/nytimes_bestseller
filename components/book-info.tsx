import { API_URL } from "../api";
import styles from "../styles/bookInfo.module.css";
import Book from "./book";
async function getBook(category: string) {
  const response = await fetch(`${API_URL}/list?name=${category}`);
  return response.json();
}

export default async function BookInfo({ category }: { category: string }) {
  const books = await getBook(category);
  return (
    <div className={styles.container}>
      {books.results.books.map((book) => (
        <Book
          key={book.primary_isbn13}
          title={book.title}
          primary_isbn13={book.primary_isbn13}
          book_image={book.book_image}
          author={book.author}
          amazon_product_url={book.amazon_product_url}
        />
      ))}
    </div>
  );
}
