import styled from "styled-components";

export default function Write() {
  return (
    <Container>
      <InputContainer>
        <StyledInput placeholder="제목" />
        <Divider />
      </InputContainer>
    </Container>
  );
}

// 스타일 정의
const Container = styled.div`
  width: 100%;
`;

const InputContainer = styled.div`
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  height: 30px;
  font-weight: 600;
  ::placeholder {
    color: #d4d6d9; /* placeholder 색상 지정 */
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #f4f4f4;
  margin: 5px auto 0rem auto;
`;
