import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
    <MainContainer>
      <MainListContainer>
        {boards.map((board) => (
          <li key={board.id}>
            <h2>{board.title}</h2>
            <p>{board.content}</p>
            <small>
              작성일: {new Date(board.createdDate).toLocaleString()}
            </small>
            <p>조회수: {board.viewCount}</p>
          </li>
        ))}
      </MainListContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div``;

const MainListContainer = styled.div``;
