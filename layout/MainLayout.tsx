import React, { ReactNode } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

// 해당 MainLayOut컴포넌트는 전체 뷰를 적용하게 하는 컴포넌트로 여기다가 레이아웃 짜고 App.tsx에 랜더링 시킴
interface MainLayoutProps {
  children: ReactNode; // ReactNode 타입으로 children을 명시적으로 정의
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 430px;
  margin: 0 auto;
  min-height: calc(100vh - 50px); /* Footer 높이를 뺀 값 */

  @media (min-width: 375px) {
    width: 430px;
  }
  @media (max-width: 500px) {
    width: 100vw;
  }
`;
