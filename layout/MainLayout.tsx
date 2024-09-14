import React, { ReactNode } from "react";
import styles from "./MainLayout.module.scss"
import { useRouter } from "next/router"; // useRouter import 추가
import Footer from "./Footer";
import Header from "./Header";
import SearchHeader from "../components/SearchHeader";
import WriteHeader from "../components/WriteHeader";
import PageTransition from "../components/PageTransition/PageTransition";

// 해당 MainLayOut컴포넌트는 전체 뷰를 적용하게 하는 컴포넌트로 여기다가 레이아웃 짜고 App.tsx에 랜더링 시킴
interface MainLayoutProps {
  children: ReactNode; // ReactNode 타입으로 children을 명시적으로 정의
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter(); // 현재 라우터 정보 가져오기

  // 특정 경로에서는 Header와 Footer 렌더링 안 함
  const hideHeader =
    router.pathname === "/search" || router.pathname === "/write";
  const showSearchHeader = router.pathname === "/search"; // search 경로일 때만 SearchHeader 표시
  const showWriteHeader = router.pathname === "/write"; // write 경로일 때만 WriteHeader 표시
  const hideFooter =
    router.pathname === "/menu" ||
    router.pathname === "/search" ||
    router.pathname === "/write" ||
    router.pathname === "/content";

  return (
    <>
      <PageTransition>
        {showSearchHeader ? (
          <SearchHeader />
        ) : showWriteHeader ? (
          <WriteHeader />
        ) : !hideHeader ? (
          <Header />
        ) : null}
        <div className={styles.main}>{children}</div>
        {!hideFooter && <Footer />}
      </PageTransition>
    </>
  );
};

export default MainLayout;