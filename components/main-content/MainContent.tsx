import { useRouter } from "next/router";
import styles from "./MainContent.module.scss"
import React from "react";
import Link from "next/link";

interface Board {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  viewCount: number;
  likeCount: number | null;
  comments: string[];
}

const MainContent = ({ boards }: { boards: Board[] }) => {
  const router = useRouter();

  return (
    <div className={styles["main-list-container"]}>
      {boards.map((board) => (
        <div className={styles["main-box"]} key={board.id}>
          <Link
            href={{
              pathname: `/contents/[id]`,
              query: { id: board.id },
            }}
            passHref
          >
            <div className={styles["main-container-line"]}>
              <h2 className={styles["main-title"]}>{board.title}</h2>
              <p className={styles["main-cont"]}>{board.content}</p>
              <div className={styles["main-detail"]}>
                <span className={styles["main-date"]}>
                  작성일: {new Date(board.createdDate).toLocaleString()}
                </span>
                <span className={styles["main-view-count"]}>
                  | 조회수: {board.viewCount}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );

    

};

export default MainContent;
