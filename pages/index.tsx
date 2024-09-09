import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MainContent from "../components/MainContent";

import Nonp from "../assets/header/NonPerson.svg";
import Good from "../assets/header/Good.svg";
interface Board {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  viewCount: number;
  likeCount: number | null;
  comments: string[];
}

export default function Home() {
  const [boards, setBoards] = useState<Board[]>([]);
  const router = useRouter();
  // 게시판 데이터를 가져오는 함수
  const fetchBoards = async () => {
    try {
      const response = await axios.get("/api/proxy"); // 프록시 API 경로 사용
      setBoards(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("API 호출 중 오류 발생", error);
    }
  };

  useEffect(() => {
    fetchBoards(); // 컴포넌트가 렌더링될 때 게시판 데이터 가져오기
  }, []);

  return (
    // <MainListContainer>
    //   <MainContainerLine onClick={() => router.push("/contents")}>
    //     {/* {boards.map((board) => (
    //     <MainListContainer>
    //     <MainContainerLine/>
    //       <li key={board.id}>
    //         <MainListContainer>{board.title}</MainListContainer>
    //         <MainContent>{board.content}</MainContent>
    //         <MainDetail>
    //       <MainDate>작성일: {new Date(board.createdDate).toLocaleString()}</MainDate>
    //       <MainViewCount>|조회수: {board.viewCount}</MainViewCount>
    //     </MainDetail>

    //       </li>
    //       <MainListContainer/>
    //     ))} */}
    //     <MainTitle>제목1</MainTitle>
    //     <MainContent>내용이이이이이</MainContent>
    //     <MainDetail>
    //       <MainDate>19:22</MainDate>
    //       <MainViewCount>|1</MainViewCount>
    //     </MainDetail>
    //   </MainContainerLine>

    // </MainListContainer>

    <MainContent boards={boards} />
    // <>
    //   <UserContainer>
    //     <Nonp />
    //     <UserBox>
    //       <UserName>익명</UserName>
    //       <MainDate>19:22</MainDate>
    //     </UserBox>
    //   </UserContainer>
    //   <MainTitle>제목1</MainTitle>
    //   <MainCont>내용이이이이이</MainCont>
    //   <MainDetail>
    //     <MainViewCount>
    //       <Good />
    //       :2
    //     </MainViewCount>
    //   </MainDetail>
    // </>
  );
}
const UserContainer = styled.div`
  margin-top: 10px;
  margin-left: 4%;
  display: flex;
  gap: 12px;
`;
const UserName = styled.div`
  font-weight: 600;
`;
const UserBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainDate = styled.div`
  font-size: 15px;
  color: #a8aaad;
`;
const MainContainerLine = styled.div`
  width: 100%;
  height: 1px;
  background: #f4f4f4;
  margin: 5px auto 0rem auto;
`;

const MainListContainer = styled.div`
  width: 100%;
  height: 130px;
`;

const MainTitle = styled.h3`
  margin-left: 4%;
  padding-top: 18px;
`;
const MainCont = styled.div`
  margin-left: 4%;
  padding-top: 8px;
`;
const MainDetail = styled.div`
  margin-left: 4%;
  padding-top: 6px;
  display: flex;
  font-size: 15px;
  color: #fa1622;
`;
const MainViewCount = styled.div``;
