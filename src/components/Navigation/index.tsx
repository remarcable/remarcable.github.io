import clsx from "clsx";
import Link from "next/link";
import styles from "./Navigation.module.scss";

const navItems = [
  { title: "Home", url: "https://www.marcnitzsche.de" },
  { title: "About", url: "https://www.marcnitzsche.de/about" },
  { title: "Photography", url: "/" },
  { title: "GitHub", url: "https://github.com/remarcable" },
];

const Navigation = ({ variant = "light" }: { variant?: "light" | "dark" }) => (
  <nav
    className={clsx(
      styles.navigation,
      variant === "dark" && styles.darkVariant
    )}
  >
    <ul>
      {navItems.map((item) => (
        <li key={item.url}>
          <Link href={item.url}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
