import React from "react";
import styles from "./SearchHeader.module.scss";

import ReadingGlasses from "../assets/header/ReadingGlasses.svg";
import { useRouter } from "next/router";

const SearchHeader = () => {
  const router = useRouter();
  return (
    <div className={styles["search-container"]}>
      <div className={styles["search-box"]}>
        <div className={styles["icon-container"]}>
          <ReadingGlasses />
        </div>
        <input type="text" placeholder="글 제목,내용,해시태그" className={styles["search-input"]}/>
      </div>

      <div className={styles["search-cancel"]} onClick={() => router.push("/")}>취소</div>
    </div>
  );
};

export default SearchHeader;
