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
      <motion.div
        transition={spring}
        style={{
          position: "relative",
          top: "px",
          perspective: "1200px",
          transformStyle: "preserve-3d",
          width: `250px`,
          height: `378px`,
          // backgroundColor: "blue",
          boxShadow:
            " 5px 8px 3px 1px rgb(255, 255, 255), 5px 8px 3px 2px rgb(235, 235, 235), 5px 8px 3px 3px rgb(215, 215, 215), 5px 8px 3px 4px rgb(195, 195, 195), 5px 8px 3px 5px rgb(175, 175, 175), 5px 8px 3px 6px rgb(155, 155, 155)",
          
        }}
      >
        <div
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%",

            boxShadow:
              "inset 20px 0px 21px -10px rgba(255,255,255,.1), inset 13px 0px 21px -10px rgba(0,0,0,.3)",
          }}
        >
          {" "}
          <div className={styles.iconContainer}>
            <GiSevenPointedStar stroke="black" strokeWidth="20" size={45} />
            <span className={styles.iconText}>{rank}</span>
          </div>
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
              // borderRadius:"2.5%",
              borderTopLeftRadius: "3.5%",
              borderTopRightRadius: "0%",
              borderBottomLeftRadius: "3.5%",
              borderBottomRightRadius: "0%",
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
