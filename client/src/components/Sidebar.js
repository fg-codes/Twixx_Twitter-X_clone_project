import { styled } from "styled-components";
import { COLORS } from "../GlobalStyles";
import { NavLink } from "react-router-dom";
import { FiBell, FiHome, FiUser, FiBookmark } from 'react-icons/fi';
import logo from '../logo.png'
import { CurrentUserContext } from "./CurrentUserContext";
import { useContext } from "react";

export const Sidebar = () => {
  const { currentuser } = useContext(CurrentUserContext);
  return (
    <Wrapper>
      <Content>
        <Logo src={logo}></Logo>
        <StyledLink to='/'><FiHome />Home Feed</StyledLink>
        <StyledLink to={`/${currentuser && currentuser.handle}`}><FiUser />Your Profile</StyledLink>
        <StyledLink to='/notifications'><FiBell />Notifications</StyledLink>
        <StyledLink to='/bookmarks'><FiBookmark />Bookmarks</StyledLink>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-inline: 4vw;
  width: fit-content;
`;

const Content = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: fit-content;
`;
const Logo = styled.img`
  width: 80%;
  margin-bottom: 2vw;
  transition: all 200ms ease-in-out;
  &:hover {
    scale: 1.05;
    cursor: pointer;
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  gap: 10px;
  padding: 5px 0;
  width: fit-content;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  color: ${COLORS.secondary_text};
  &:hover {
    color: ${COLORS.hover};
  }
  &.active {
    color: ${COLORS.primary_blue};
  }
  &.active:hover {
    color: ${COLORS.hover};
  }
`;