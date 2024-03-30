"use client";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../styles/navigation.module.css";

const navVariants = {
  scrollUp: {
    opacity: 1,
  },
  scrollDown: {
    opacity: 0,
  },
};

export default function Navigation() {
  const path = usePathname();
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    // return scrollY.onChange(() => {

    return useMotionValueEvent(scrollY, "change", () => {
      const currentScrollY = scrollY.get();

      // 스크롤이 내려가는 경우
      if (currentScrollY > prevScrollY) {
        navAnimation.start("scrollDown");
      } else {
        // 스크롤이 올라가거나 멈춰있는 경우
        navAnimation.start("scrollUp");
      }

      // 현재 스크롤 위치를 이전 스크롤 위치로 업데이트
      setPrevScrollY(currentScrollY);
    });
  }, [scrollY, prevScrollY, navAnimation]);
  return (
    <motion.nav
      className={styles.nav}
      variants={navVariants}
      animate={navAnimation}
      initial={"top"}
    >
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? " 📚 " : ""}
        </li>
        <li>
          <Link href="/about">About Us</Link>
          {path === "/about" ? " 📚 " : ""}
        </li>
      </ul>
    </motion.nav>
  );
}
