import clsx from "clsx";
import Link from "next/link";
import styles from "./Navigation.module.scss";

const navItems = [
  { title: "Home", url: "/" },
  { title: "Photography", url: "/photography" },
  { title: "Blog", url: "https://blog.marcnitzsche.de" },
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
