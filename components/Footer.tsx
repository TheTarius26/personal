import React from "react";

import { 
  FacebookFilled, 
  GithubFilled, 
  MediumCircleFilled, 
  TwitterCircleFilled 
} from "@ant-design/icons";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made with{" "}
        <span role="img" aria-label="heart">
          🔥
        </span>{" "}
        by Tarius
      </p>
      <div className="flex justify-center p-1 space-x-2">
        <a href="https://twitter.com/tarius_dev" target="_blank" rel="noopener noreferrer">
          <TwitterCircleFilled className={styles.medsoc} />
        </a>
        <a href="https://facebook.com/tarius_dev" target="_blank" rel="noopener noreferrer">
          <FacebookFilled className={styles.medsoc} />
        </a>
        <a href="https://github.com/thetarius26" target="_blank" rel="noopener noreferrer">
          <GithubFilled className={styles.medsoc} />
        </a>
        <a href="https://medium.com/@tarius_dev" target="_blank" rel="noopener noreferrer">
          <MediumCircleFilled className={styles.medsoc} />
        </a>
      </div>
    </footer>
  );
}