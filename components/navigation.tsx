"use client";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css";

const navVariants = {
  visible: {
    opacity: 1,
    transition:{ duration: 0.1 },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

export default function Navigation() {
  const path = usePathname();
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const [prevScrollY, setPrevScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", () => {
    const currentScrollY = scrollY.get();
    if (currentScrollY > prevScrollY) {
      navAnimation.start("hidden");
    } else {
      navAnimation.start("visible");
    }
    setPrevScrollY(currentScrollY);
  });
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
        {path.startsWith("/list") ?
        <li>
          <Link href="">list</Link>
          {path.startsWith("/list") ? " 📚 " : ""}
        </li>
        :""}
      </ul>
    </motion.nav>
  );
}
