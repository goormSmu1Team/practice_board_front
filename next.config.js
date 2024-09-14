// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/proxy/:id", // 클라이언트에서 호출하는 경로
        destination: "http://121.185.8.167:9090/boards/:id", // 실제 API 서버 경로
      },
    ];
  },

  // React Strict Mode 활성화
  reactStrictMode: true,

  // 웹팩 설정 (SVG 파일을 처리하기 위한 설정)
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
