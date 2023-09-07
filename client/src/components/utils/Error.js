import { styled } from 'styled-components';
import { COLORS } from '../../GlobalStyles';
import { FaSadCry } from 'react-icons/fa';

export const Error = () => {
  return (
    <Wrapper>
      <StyledFaSadCry />
      <H1>AN UNKNOWN ERROR HAS OCCURED.</H1>
      <p>Please try refreshing the page, or <Email href='mailto:please@dont.com'>contact support</Email> if the problem persists.</p>
    </Wrapper>
  )
}

const StyledFaSadCry = styled(FaSadCry)`
  font-size: 75px;
  margin-bottom: 30px;
`;

const H1 = styled.h1`
  font-size: 20px;
  margin: 10px;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: ${COLORS.secondary_text};
  width: fit-content;
  margin: 20px auto;
  border-radius: 5px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Email = styled.a`
  color: ${COLORS.primary_blue};
`;