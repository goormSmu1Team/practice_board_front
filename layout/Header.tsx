import React from "react";
import styled from "styled-components";

const Header = () => {
  console.log("Header Rendered");
  return (
    <HeaderContainer>
      <HeaderItem>
        자유게시판
        <HeadersubItem>상명대 천안캠</HeadersubItem>
      </HeaderItem>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  text-align: center;
  width: 100%;
  height: 50px;
  top: 0;
`;

const HeaderItem = styled.div`
  flex-direction: column;
  font-size: 13px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadersubItem = styled.div`
  font-size: 13px;
  color: gray;
`;
