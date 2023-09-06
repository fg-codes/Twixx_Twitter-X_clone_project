import styled from "styled-components";
import { FaSadCry } from "react-icons/fa";
import { COLORS } from "../../GlobalStyles";

export const Error = () => {
  return (
    <Wrapper>
      <StyledFaSadCry />
      <H1>AN UNKNOWN ERROR HAS OCCURED.</H1>
      <p>Please try refreshing the page, or <a href="mailto:please@dont.com">contact support</a> if the problem persists.</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 5vh;
  text-align: center;
`;

const StyledFaSadCry = styled(FaSadCry)`
  font-size: 200px;
`;

const H1 = styled.h1`
  font-size: 45px;
  margin: 20px;
  color: ${COLORS.red};
`;