"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GiSevenPointedStar } from "react-icons/gi";
import styles from "../styles/book.module.css";

interface IBookProps {
  title: string;
  primary_isbn13: number;
  book_image: string;
  author: string;
  amazon_product_url: string;
  rank: number;
}

export default function Book({
  title,
  primary_isbn13,
  book_image,
  author,
  amazon_product_url,
  rank,
}: IBookProps) {
  const router = useRouter();
  const goDetail = () => {
    router.push(`/books/${primary_isbn13}`);
  };
  const goBuyNow = () => {
    window.location.href = amazon_product_url;
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={styles.bookContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.iconContainer}>
        <GiSevenPointedStar stroke="black" strokeWidth="20" size={35} />
        <span className={styles.iconText}>{rank}</span>
      </div>
      <div className={styles.bookImgBox}>
        <motion.img
          src={book_image}
          alt={title}
          onClick={goDetail}
          animate={{
            rotateY: isHovered ?  '30deg': 0,
            rotateX: isHovered ? '10deg' : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <div className={styles.bookInfoBox}>
        <h2>{title}</h2>
        <h3>by {author}</h3>
        <button onClick={goBuyNow}>Buy Now!</button>
      </div>
      {/* <div className={styles.bookDescription}></div> */}
    </div>
  );
}
