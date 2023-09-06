import { styled } from "styled-components";
import { BiLoader } from "react-icons/bi";

export const Loading = () => {
  return (
    <Wrapper>
      <StyledBiLoader />
    </Wrapper>
  )
}

export const LoadingSmall = () => {
  return (<StyledBiLoader />)
}
const Wrapper = styled.div`
text-align: center;
padding: 40px 0px;
`;
const StyledBiLoader = styled(BiLoader)`
font-size: 25px;
animation: rotate 1500ms infinite linear;
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`;