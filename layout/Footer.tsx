import React from "react";
import styles from "./Footer.module.scss"
import { useRouter } from "next/router";

import Pencil from "../assets/footer/Pencil.svg";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname.startsWith(path);

  return (
    <Link href="/write">

      <div className={styles["footer-container"]}>
        <div className={styles["footer-item"]}>
          <div className={styles["footer-content"]}>
          <Pencil />
          글쓰기
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Footer;