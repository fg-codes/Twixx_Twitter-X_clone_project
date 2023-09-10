import { styled } from 'styled-components';
import { COLORS } from '../GlobalStyles';

export const Tabulate = ({ tab, setTab }) => {
  return (
    <Tabs onClick={({ target }) => setTab(target.value)}>
      <TabButton value='tweets' checked={tab === 'tweets'}>Tweets</TabButton>
      <TabButton value='media' checked={tab === 'media'}>Media</TabButton>
      <TabButton value='likes' checked={tab === 'likes'}>Likes</TabButton>
    </Tabs>
  )
}

const TabButton = styled.button`
  flex-grow: 1;
  padding: 20px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  background-color: transparent;
  color: ${props => props.checked ? COLORS.primary_blue : COLORS.primary_text};
  border-bottom: 3px solid ${props => props.checked ? COLORS.primary_blue : 'transparent'};
  transition: all 200ms ease-in-out;
  &:hover {
    cursor: pointer;
    color: ${COLORS.hover};
  }
`;
const Tabs = styled.div`
  margin-top: 4vh;
  display: flex;
  justify-content: space-between;
`;