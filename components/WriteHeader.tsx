import { useRouter } from "next/router";
import React from "react";
import styles from "./WriteHeader.module.scss";

import Back from "../assets/header/Back.svg";

const WriteHeader = () => {
  const router = useRouter();
  return (
    <div className={styles["write-container"]}>
      <div
        className={styles["write-delete-icon"]}
        onClick={() => router.push("/")}
      >
        <Back />
      </div>
      <div className={styles["write-title"]}>글쓰기</div>
      <div className={styles["write-finish-icon"]}>완료</div>
    </div>
  );
};

export default WriteHeader;
