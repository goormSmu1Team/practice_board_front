import { useRouter } from "next/router";
import styled from "styled-components";
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
    <MainListContainer>
      {boards.map((board) => (
        <MainBox key={board.id}>
          <Link
            href={{
              pathname: `/contents/[id]`, // Dynamic routing 사용
              query: { id: board.id },
            }}
            passHref
          >
            <MainContainerLine>
              <MainTitle>{board.title}</MainTitle>
              <MainCont>{board.content}</MainCont>
              <MainDetail>
                <MainDate>
                  작성일: {new Date(board.createdDate).toLocaleString()}
                </MainDate>
                <MainViewCount>| 조회수: {board.viewCount}</MainViewCount>
              </MainDetail>
            </MainContainerLine>
          </Link>
        </MainBox>
      ))}
    </MainListContainer>
  );
};

export default MainContent;

const MainContainerLine = styled.div`
  width: 100%;
  height: 1px;
  background: #f4f4f4;
  margin: 5px auto 0rem auto;
  cursor: pointer;
`;

const MainListContainer = styled.div`
  width: 100%;
`;

const MainTitle = styled.h3`
  margin-left: 2%;
  padding-top: 20px;
`;

const MainCont = styled.div`
  margin-left: 2%;
  padding-top: 5px;
`;

const MainDetail = styled.div`
  margin-left: 2%;
  padding-top: 6px;
  display: flex;
  font-size: 15px;
  color: #bebfc2;
`;

const MainDate = styled.div``;

const MainViewCount = styled.div``;
const MainBox = styled.div`
  width: 100%;
  height: 100px;
`;
