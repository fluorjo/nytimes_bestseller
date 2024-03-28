"use client";

import Link from "next/link";
import styles from "../styles/book.module.css";
import { useRouter } from "next/navigation";

interface IBookProps {
  title: string;
  primary_isbn13: number;
  book_image: string;
}

export default function Book({ title, primary_isbn13, book_image }: IBookProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/books/${primary_isbn13}`);
  };
  return (
    <div className={styles.book}>
      <img src={book_image} alt={title} onClick={onClick} />
      <Link href={`/books/${primary_isbn13}`}>{title}</Link>
    </div>
  );
}