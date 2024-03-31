"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles/book.module.css";
import { BronzeIcon, DefaultIcon, GoldIcon, SilverIcon } from "./Icons/star";
interface IBuyLink {
  name: string;
  url: string;
}
interface IBookProps {
  title: string;
  primary_isbn13: number;
  book_image: string;
  author: string;
  amazon_product_url: string;
  rank: number;
  description: string;
  buy_links: IBuyLink[];
}
function getStarIcon(rank) {
  switch (rank) {
    case 1:
      return <GoldIcon />;
    case 2:
      return <SilverIcon />;
    case 3:
      return <BronzeIcon />;
    default:
      return <DefaultIcon />;
  }
}

const iconContainerVariants = {
  hovered: { translateY: `-60px`, transition: { duration: 0.2 } },
  notHovered: { translateY: 0, transition: { duration: 0.2 } },
};

export default function Book({
  title,
  primary_isbn13,
  book_image,
  author,
  amazon_product_url,
  rank,
  description,
  buy_links,
}: IBookProps) {
  const goBuyNow = () => {
    window.location.href = amazon_product_url;
  };
  const [isFlipped, setIsFlipped] = useState(false);
  const StarIcon = getStarIcon(rank);
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };
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
            variants={iconContainerVariants}
            animate={isFlipped ? "hovered" : "notHovered"}
            // style={{
            //   zIndex: !isFlipped ? 2 : 2,
            // }}
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
        <button className={styles.BuyButton} onClick={handleButtonClick}>
          {" "}
          {buttonClicked ? "Select Bookshop" : "Buy ↓"}
        </button>
        {buttonClicked && (
          <div className={styles.shopList}>
            <ul>
              {buy_links?.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
