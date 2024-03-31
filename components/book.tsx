"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../styles/book.module.css";
import {GoldIcon,SilverIcon,BronzeIcon,DefaultIcon} from "./Icons/star";

interface IBookProps {
  title: string;
  primary_isbn13: number;
  book_image: string;
  author: string;
  amazon_product_url: string;
  rank: number;
  description: string;
}
function getStarIcon(rank) {
  switch (rank) {
    case 1:
      return <GoldIcon />;
    case 2:
      return <SilverIcon/>;
    case 3:
      return <BronzeIcon/>;
    default:
      return <DefaultIcon/>;
  }
}

export default function Book({
  title,
  primary_isbn13,
  book_image,
  author,
  amazon_product_url,
  rank,
  description,
}: IBookProps) {
  const router = useRouter();
  const goDetail = () => {
    router.push(`/books/${primary_isbn13}`);
  };
  const goBuyNow = () => {
    window.location.href = amazon_product_url;
  };
  const [isFlipped, setIsFlipped] = useState(false);
  const StarIcon = getStarIcon(rank);

  return (
    <div
      className={styles.bookContainer}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        style={{
          position: "relative",
          top: "px",
          perspective: "1200px",
          transformStyle: "preserve-3d",
          width: `250px`,
          height: `378px`,
          // backgroundColor: "blue",
          boxShadow:
            " 9px 8px 4px 1px rgb(245, 245, 245), 9px 8px 4px 2px rgb(205, 205, 205), 9px 8px 4px 3px rgb(155, 155, 155), 9px 8px 4px 4px rgb(105, 105, 105), 9px 8px 4px 5px rgb(55, 55, 55), 9px 8px 4px 6px rgb(0, 0, 0)",
        }}
      >
        <div
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%",
            backgroundColor: "#ededed",
            boxShadow:
              "inset 20px 0px 21px -10px rgba(255,255,255,.1), inset 13px 0px 21px -10px rgba(0,0,0,.3)",
          }}
        >
          <motion.div
            className={styles.iconContainer}
            initial={{ opacity: 1 }}
            animate={{ translateY: isFlipped ? `-60px` : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              zIndex: !isFlipped ? 2 : 2,
            }}
          >
            {StarIcon}
            <span className={styles.iconText}>{rank}</span>
          </motion.div>

          <motion.img
            src={book_image}
            alt={title}
            initial={{ opacity: 1 }}
            animate={{ rotateY: isFlipped ? -180 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              width: "100%",
              height: "100%",
              zIndex: isFlipped ? 0 : 1,
              backfaceVisibility: "hidden",
              position: "absolute",
              left: "0px",
              borderTopLeftRadius: "3.5%",
              borderTopRightRadius: "0%",
              borderBottomLeftRadius: "3.5%",
              borderBottomRightRadius: "0%",
              transformOrigin: "left center",
              backgroundColor: "#ededed",
            }}
          />
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isFlipped ? 1 : 0 }}
            transition={{ duration: 0.1 }}
            style={{
              width: "100%",
              height: "100%",
              zIndex: isFlipped ? 1 : 0,
              backfaceVisibility: "hidden",
              position: "absolute",
              backgroundColor: "#ededed",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "26px",
              lineHeight: "32px",
              borderTopLeftRadius: "3.5%",
              borderTopRightRadius: "0%",
              borderBottomLeftRadius: "3.5%",
              borderBottomRightRadius: "0%",
              padding: "0px 0px 5px 5px",
            }}
          >
            {description}
          </motion.div>
        </div>
      </motion.div>
      <div className={styles.bookInfoBox}>
        <h2>{title}</h2>
        <h3>by {author}</h3>
        <button onClick={goBuyNow}>Buy Now!</button>
      </div>
    </div>
  );
}
