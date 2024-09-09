import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

// 게시글 데이터 타입 정의
interface Board {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  viewCount: number;
  likeCount: number | null;
  comments: string[];
}

export default function BoardDetails() {
  const [board, setBoard] = useState<Board | null>(null); // 현재 게시글의 데이터를 저장
  const router = useRouter();
  const { id } = router.query; // URL에서 동적 id 값을 추출

  // 특정 게시글 데이터를 가져오는 함수
  const fetchBoard = async (boardId: string | string[] | undefined) => {
    if (!boardId) return;
    try {
      const response = await axios.get(`/api/proxy/board/${boardId}`); // 프록시 API를 통해 해당 게시글 데이터 요청
      setBoard(response.data);
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchBoard(id); // id 값이 있을 때만 게시글 데이터 가져오기
    }
  }, [id]);

  if (!board) {
    return <div>로딩 중...</div>; // 데이터가 로드되기 전 로딩 상태 표시
  }

  return (
    <Container>
      <Title>{board.title}</Title>
      <Content>{board.content}</Content>
      <Detail>
        <CreatedDate>
          작성일: {new Date(board.createdDate).toLocaleString()}
        </CreatedDate>
        <ViewCount>| 조회수: {board.viewCount}</ViewCount>
      </Detail>
    </Container>
  );
}

// 스타일 정의
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
`;

const CreatedDate = styled.div``;

const ViewCount = styled.div``;
