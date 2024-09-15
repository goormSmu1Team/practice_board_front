import React, { ReactNode } from "react";

import styled from "styled-components";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Header from "./Header";
import SearchHeader from "../components/SearchHeader";
import WriteHeader from "../components/WriteHeader";
import PageTransition from "../components/PageTransition/PageTransition";
import Write from "../pages/write"; // Write 컴포넌트 import

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();

  // 특정 경로에서는 Header와 Footer 렌더링 안 함
  const hideHeader =
    router.pathname === "/search" || router.pathname === "/write";
  const showSearchHeader = router.pathname === "/search";
  const showWriteHeader = router.pathname === "/write";
  const hideFooter = router.pathname === "/";

  // 상태를 유지하기 위한 함수
  const handleSubmit = () => {
    // Write 컴포넌트의 handleSubmit 호출 로직을 추가합니다.
    // `Write` 컴포넌트와 `handleSubmit`을 연결하는 방법이 필요합니다.
    console.log("완료 버튼이 클릭되었습니다.");
    // 필요한 로직을 여기에 추가합니다.
  };

  return (
    <>
      <PageTransition>
        {showSearchHeader ? (
          <SearchHeader />
        ) : showWriteHeader ? (
          <WriteHeader onSubmit={handleSubmit} />
        ) : !hideHeader ? (
          <Header />
        ) : null}


        <Main>{children}</Main>
        {hideFooter && <Footer />}

      </PageTransition>
    </>
  );
};


export default MainLayout;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 430px;
  margin: 0 auto;
  min-height: calc(100vh - 50px);

  @media (min-width: 375px) {
    width: 430px;
  }
  @media (max-width: 500px) {
    width: 100vw;
  }
`;

