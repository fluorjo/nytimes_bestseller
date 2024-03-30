"use client";

import { useRouter } from "next/navigation";
import { GiSevenPointedStar } from "react-icons/gi";
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
    <div className={styles.bookContainer}>
      <GiSevenPointedStar
        fill="white"
        stroke="black"
        strokeWidth="30"
        size={35}
        //그라데이션이 필요할지도.
      />

      <div className={styles.bookImgBox}>
        <img src={book_image} alt={title} onClick={goDetail} />
      </div>
      <div className={styles.bookInfoBox}>
        <h2>{title}</h2>
        <h3>by {author}</h3>
        <button onClick={goBuyNow}>Buy Now!</button>
      </div>
    </div>
  );
}
