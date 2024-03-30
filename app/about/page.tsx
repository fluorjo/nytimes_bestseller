import styles from "../../styles/about.module.css";

export const metadata = {
    title: "About",
  };

export default function About() {
    return (
      <div className={styles.Introduce}>
        <h1 >About Us</h1>
        <h2>Welcome to the official explorer for The Nomad Times Best Seller list explorer. </h2>
        <h2>We hope you enjoy your stay!</h2>
      </div>
    );
  }