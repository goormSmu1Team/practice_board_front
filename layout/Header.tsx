import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import styles from "./Header.module.scss"
import ReadingGlasses from "../assets/header/ReadingGlasses.svg";
import VericalDot from "../assets/header/VerticalDots.svg";
import Back from "../assets/header/Back.svg";
const Header = () => {
  const router = useRouter();
  const ShowBack = router.pathname === "/content";
  //   const isActive = (path: string) => router.pathname.startsWith(path);

  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-back"]} onClick={() => router.push("/")}>
        {ShowBack && <Back />}
      </div>

      <div className={styles["header-item"]}>
        자유게시판
        <div className={styles["header-sub-item"]}>상명대 천안캠</div>
      </div>

      <div className={styles["header-bt"]}>
        <div className={styles["header-rg"]} onClick={() => router.push("/search")}>
          <ReadingGlasses />
        </div>
        <div className={styles["header-vd"]} onClick={() => router.push("/menu")}>
          <VericalDot />
        </div>
      </div>
    </div>



  );
};

export default Header;