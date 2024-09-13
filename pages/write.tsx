import styled from "styled-components";

export default function Write() {
  return (
    <Container>
      <InputTitleContainer>
        <StyledInput placeholder="제목" />
        <Divider />
      </InputTitleContainer>
      <InputContentContainer>
        <StyledInputContent placeholder="내용을 입력하세요" />
      </InputContentContainer>
    </Container>
  );
}

// 스타일 정의
const Container = styled.div`
  width: 100%;
`;

const InputTitleContainer = styled.div`
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
`;
const InputContentContainer = styled.div`
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  height: 30px;
  font-weight: 600;
  padding: 10px;
  ::placeholder {
    color: #d4d6d9; /* placeholder 색상 지정 */
  }
`;
const StyledInputContent = styled.textarea`
  border: none;
  width: 100%;
  height: 1000px;
  font-weight: 600;
  resize: none; /* 사용자가 크기 조정 못하게 */
  ::placeholder {
    color: #d4d6d9; /* placeholder 색상 지정 */
  }
  padding: 10px; /* 텍스트가 너무 모서리에 붙지 않도록 패딩 추가 */
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #f4f4f4;
  margin: 5px auto 0rem auto;
`;
