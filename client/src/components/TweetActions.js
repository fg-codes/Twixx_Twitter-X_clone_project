import { styled } from "styled-components";
import { FiMessageSquare, FiRepeat, FiHeart, FiShare2 } from "react-icons/fi";
import { useState } from "react";

export const TweetActions = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Wrapper >
      <FiMessageSquare />
      <FiRepeat />

      <Div onClick={() => setIsLiked(!isLiked)}>
        <StyledFiHeart isliked={isLiked ? 'red' : ''} />
        {isLiked && (<Span>{isLiked ? 1 : 0}</Span>)}
      </Div>
      <FiShare2 />
    </Wrapper>
  )
}

const Div = styled.div`
  position: relative;
  display: flex;
  padding: inherit;
`;
const Span = styled.span`
  position: absolute;
  right: -10px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 70%;
  gap: 20%;
  padding: 10px 0px;
  justify-content: center;
  margin: 0 auto;
  & > * {
    padding: 8px;
    border-radius: 50px;
    transition: all 200ms ease-in-out;
    &:hover {
      background-color: lightpink;
      cursor: pointer;
    }
  }
`;

const StyledFiHeart = styled(FiHeart)`
  color: ${props => props.isliked};
`;