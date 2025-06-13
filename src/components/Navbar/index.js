import { useTheme } from '@emotion/react';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { ButtonContainer, GitHubButton, MobileIcon, MobileLink, MobileMenu, Nav, NavItems, NavLink, NavLogo, NavbarContainer, Span } from './NavbarStyledComponent';

// export const Span = styled.span`
// padding:0 4px;
// font-weight: bold;
// font-size: 10px;
// `
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
      <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span> MY Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
        <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton>GithubProfile</GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
      {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <GitHubButton
  style={{
    padding: '10px 16px',
    background: `${theme.primary}`,
    color: 'white',
    width: 'max-content'
  }}
  href="https://github.com/BuragapuHarika?tab=repositories"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setIsOpen(false)}
>
  Github Profile
</GitHubButton>


          </MobileMenu>
        }
    </Nav>
  );
};

export default Navbar;
