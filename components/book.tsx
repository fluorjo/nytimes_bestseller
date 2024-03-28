"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/book.module.css";

interface IBookProps {
  title: string;
  primary_isbn13: number;
  book_image: string;
  author: string;
  amazon_product_url: string;
}

export default function Book({
  title,
  primary_isbn13,
  book_image,
  author,
  amazon_product_url,
}: IBookProps) {
  const router = useRouter();
  const goDetail = () => {
    router.push(`/books/${primary_isbn13}`);
  };
  const goBuyNow = () => {
    window.location.href = amazon_product_url;
  };
  return (
    <div className={styles.book}>
      <img src={book_image} alt={title} onClick={goDetail} />
      <Link href={`/books/${primary_isbn13}`}>{title}</Link>
      <h2>{author}</h2>
      <button onClick={goBuyNow}>Buy Now!</button>
    </div>
  );
}
