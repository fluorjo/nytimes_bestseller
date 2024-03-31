import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";
import { Karla } from 'next/font/google'; 

export const metadata: Metadata = {
  title: {
    template: "%s | NY Times Bestsellers",
    default: "NY Times Bestsellers",
  },
  description: "NY Times Bestsellers",
};
const notoSansKr = Karla({
  weight: ['500'],
  subsets: ['latin'],
});
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}