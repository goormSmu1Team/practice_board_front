import { useEffect, useState } from "react";
import axiosInstance from "../lib/axios"; // axios instance 경로
import Footer from "../layout/Footer";
import Header from "../layout/Header";

// 게시판 데이터의 타입을 정의
interface Board {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  viewCount: number;
  likeCount: number | null;
  comments: string[]; // comments는 배열로 가정
}

export default function Home() {
  const [boards, setBoards] = useState<Board[]>([]); // 상태에 Board[] 타입 지정

  // 게시판 데이터를 가져오는 함수
  const fetchBoards = async () => {
    try {
      const response = await axiosInstance.get("/board"); // /board로 API 요청
      setBoards(response.data); // 가져온 데이터를 상태에 저장
      console.log(response.data);
    } catch (error) {
      console.error("API 호출 중 오류 발생", error);
    }
  };

  // 컴포넌트가 렌더링될 때 호출
  useEffect(() => {
    fetchBoards(); // 게시판 데이터를 가져오는 함수 호출
  }, []);

  return (
    <div>
      <h1>게시판 목록</h1>
      <ul>
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
      </ul>
    </div>
  );
}
