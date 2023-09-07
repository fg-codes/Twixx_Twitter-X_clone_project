import { styled } from "styled-components";
import { FiMessageSquare, FiRepeat, FiHeart, FiShare2 } from "react-icons/fi";
import { useState } from "react";
import { COLORS } from "../GlobalStyles";

export const TweetActions = ({ retweets, likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [total, setTotal] = useState(likes)

  const handleCounter = () => {
    isLiked && setTotal(prev => prev - 1)
    !isLiked && setTotal(prev => prev + 1)
    setIsLiked(!isLiked)
  }
  return (
    <Wrapper >
      <FiMessageSquare />

      <Div>
        <FiRepeat />
        {retweets > 0 && <Span>{retweets}</Span>}
      </Div>
      <Div onClick={() => handleCounter()}>
        <StyledFiHeart isliked={isLiked ? 'red' : ''} />
        {total > 0 && <Span>{total}</Span>}
      </Div>
      <FiShare2 />
    </Wrapper>
  )
}

const Div = styled.div`
  position: relative;
  display: flex;
`;

const Span = styled.span`
  position: absolute;
  right: -10px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 70%;
  gap: 20%;
  justify-content: center;
  margin: 2vh auto;
  cursor: default;
  & > * {
    transition: all 200ms ease-in-out;
    padding: 8px;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
      background-color: ${COLORS.hover};
    }
  }
`;

const StyledFiHeart = styled(FiHeart)`
  color: ${props => props.isliked};
`;