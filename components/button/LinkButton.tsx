import React from "react";
import Link from "next/link";

import styles from "../../styles/Button.module.css";

type Props = {
  href: string;
  children?: React.ReactNode;
}

export default function LinkButton({href, children}: Props) {
  return (
    <Link href={href} passHref>
      <div className={styles.btnContainer}>
        {children}
      </div>
    </Link>
  );
}