import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MainContent from "../components/MainContent";

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

  const fetchBoards = async () => {
    try {
      const response = await axios.get("/api/proxy"); // API proxy route to get boards
      setBoards(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching boards:", error);
    }
  };

  useEffect(() => {
    fetchBoards(); // Fetch boards when component mounts
  }, []);

  return <MainContent boards={boards} />;
}
