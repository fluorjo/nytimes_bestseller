"use client";

import { motion, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GiSevenPointedStar } from "react-icons/gi";
import styles from "../styles/book.module.css";

interface IBookProps {
  title: string;
  primary_isbn13: number;
  book_image: string;
  author: string;
  amazon_product_url: string;
  rank: number;
  description: string;
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
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateXaxis, setRotateXaxis] = useState(0);
  const [rotateYaxis, setRotateYaxis] = useState(0);
  const ref = useRef(null);

  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 40,
  };
  const dx = useSpring(0, spring);
  const dy = useSpring(0, spring);
  useEffect(() => {
    dx.set(-rotateXaxis);
    dy.set(rotateYaxis);
  }, [rotateXaxis, rotateYaxis]);

  return (
    <div
      className={styles.bookContainer}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={styles.iconContainer}>
        <GiSevenPointedStar stroke="black" strokeWidth="20" size={35} />
        <span className={styles.iconText}>{rank}</span>
      </div>
      <motion.div
        transition={spring}
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
          width: `250px`,
          height: `378px`,
          // backgroundColor:"blue"
        }}
      >
        <div
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%",
          }}
        >
          <motion.img
            src={book_image}
            alt={title}
            animate={{ rotateY: isFlipped ? -180 : 0 }}
            // transition={{duration:1}}
            transition={spring}
            style={{
              width: "100%",
              height: "100%",
              zIndex: isFlipped ? 0 : 1,
              backfaceVisibility: "hidden",
              position: "absolute",
              left: "0px",
              // transformOrigin: "left center",
            }}
          />
          <motion.div
            initial={{ rotateY: 180 }}
            animate={{ rotateY: isFlipped ? 0 : 180 }}
            transition={spring}
            style={{
              width: "100%",
              height: "100%",
              zIndex: isFlipped ? 1 : 0,
              backfaceVisibility: "hidden",
              position: "absolute",
              // backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
