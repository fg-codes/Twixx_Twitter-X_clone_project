import { styled } from "styled-components";
import { COLORS } from "../GlobalStyles";
import { NavLink } from "react-router-dom";
import { FiBell, FiHome, FiUser, FiBookmark } from 'react-icons/fi';
import logo from '../logo.svg'
import { CurrentUserContext } from "./CurrentUserContext";
import { useContext } from "react";

export const Sidebar = () => {
  const { currentuser } = useContext(CurrentUserContext);
  return (
    <Wrapper>
      <Content>
        <Logo src={logo}></Logo>
        <StyledLink to='/'><FiHome />Home</StyledLink>
        <StyledLink to={`/${currentuser && currentuser.handle}`}><FiUser />Profile</StyledLink>
        <StyledLink to='/notifications'><FiBell />Notifications</StyledLink>
        <StyledLink to='/bookmarks'><FiBookmark />Bookmarks</StyledLink>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  border-right: 1px solid ${COLORS.matte_blue};
  min-height: 100vh; 
`;

const Content = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px;
`;
const Logo = styled.img`
  width: 100%;
  opacity: 0.25;
  position: absolute;
  top: 10px;
  left: 0px;
`;

const StyledLink = styled(NavLink)`
  z-index: 10;
  display: flex;
  gap: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  width: fit-content;
  padding: 10px 16px;
  border-radius: 50px;
  transition: all 200ms ease-in-out;
  color: ${COLORS.dark_gray};
  &:hover {
    background-color: ${COLORS.matte_blue};
    color: ${COLORS.background};
    font-weight: 500;
  }
  &.active {
    color: ${COLORS.red};
  }
  &.active:hover {
    color: ${COLORS.background};
  }
`;