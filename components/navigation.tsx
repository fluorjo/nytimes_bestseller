"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";



export default function Navigation() {
  const path = usePathname();
  const { scrollY } = useScroll();
//motion.div하고 classname 써주면 되지 않을까?
  useMotionValueEvent(scrollY, "change", () => {
    console.log(scrollY.get());
    if (scrollY.get() > 80) {
      navAnimation.start("scroll");
    } else {
      navAnimation.start("top");
    }
  });
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? " 📚 " : ""}
        </li>
        <li>
          <Link href="/about">About Us</Link>
          {path === "/about" ? " 📚 " : ""}
        </li>
      </ul>
    </nav>
  );
}
