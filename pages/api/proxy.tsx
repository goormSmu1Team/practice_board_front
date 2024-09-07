import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  // /api/proxy로 들어오는 경로를 /board로 변환하여 외부 API로 요청
  const targetUrl = `http://121.185.8.167:9090/board`;

  try {
    // axios를 사용하여 외부 API로 요청을 보냄
    const response = await axios({
      method,
      url: targetUrl,
      data: body,
    });

    // 외부 API의 응답을 클라이언트에 전달
    res.status(response.status).json(response.data);
  } catch (error: any) {
    // 오류 처리
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
