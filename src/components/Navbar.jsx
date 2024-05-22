import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Resume from "../data/images/Resume.pdf";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const ColorText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 32px;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled.a`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ResumeButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  cursor : pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")}; 
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="/">
          <ColorText>&lt;</ColorText>Praveen
          <div style={{ color: theme.primary }}>/</div>Kumar
          <ColorText>&gt;</ColorText>
        </NavLogo>

        <MobileIcon onClick={handleMenuToggle}>
          <MenuRoundedIcon style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About" onClick={handleCloseMenu}>
            About
          </NavLink>
          <NavLink href="#Skills" onClick={handleCloseMenu}>
            Skills
          </NavLink>
          <NavLink href="#Projects" onClick={handleCloseMenu}>
            Projects
          </NavLink>
          <NavLink href="#stats" onClick={handleCloseMenu}>
            Statastics
          </NavLink>
          <NavLink href="#Contact" onClick={handleCloseMenu}>
            Contact
          </NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink href="#About" onClick={handleCloseMenu}>
              About
            </NavLink>
            <NavLink href="#Skills" onClick={handleCloseMenu}>
              Skills
            </NavLink>
            <NavLink href="#Projects" onClick={handleCloseMenu}>
              Projects
            </NavLink>
            <NavLink href="#Contact" onClick={handleCloseMenu}>
              Contact
            </NavLink>
            <ResumeButton
              href={Resume}
              download={'resume'}
              target="_blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              Resume
            </ResumeButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <ResumeButton href={Resume} download={'resume'}>
            Resume
          </ResumeButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
