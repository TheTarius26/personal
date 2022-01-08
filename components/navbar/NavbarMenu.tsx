import React from "react";
import Link from "next/link";

import styles from "../../styles/Navbar.module.css";

type Props = {
  href: string;
  children?: React.ReactNode;
}

export default function NavbarMenu({href, children}: Props) {
  return (
    <Link href={href} passHref>
      <span className={styles.navbarLink}>{children}</span>
    </Link>
  );
}