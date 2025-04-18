import "./index.css";
import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 70px;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1rem;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  border-radius: 0.8rem;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: all 0.3s ease;
`;

const NavLogo = styled(LinkR)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  width: 80%;
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  @media screen and(max-width : 640px) {
    padding: 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    cursor: pointer;
    transform: translate(-100%, 50%);
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 32px;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  background-color: transparent;
  text-decoration: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  margin-right: 0.5rem;

  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and(max-width : 768px) {
    font-size: 0.8rem;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 70px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const MobileButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 80%;
  height: 100%;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
`;

const MobileButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 60%;
  margin-right: 0.75rem;

  @media screen and(max-width : 768px) {
    font-size: 0.8rem;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScroll, setIsScroll] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      setIsScroll(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav>
      <NavContainer className={isScroll ? "scrolled" : ""}>
        <NavLogo>Akash</NavLogo>

        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          ></FaBars>
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>

        <ButtonContainer>
          <Button href="https://github.com/Akashsingh7054" target="blank">
            Github
          </Button>
          <Button
            href="https://www.linkedin.com/in/akash-singh-76542924b/"
            target="blank"
          >
            LinkedIn
          </Button>
        </ButtonContainer>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>
              About
            </MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(!isOpen)}>
              Skills
            </MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(!isOpen)}>
              Projects
            </MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(!isOpen)}>
              Education
            </MobileLink>
            <MobileButtonContainer isOpen={isOpen}>
              <MobileButton
                href="https://github.com/Akashsingh7054"
                target="blank"
              >
                Github
              </MobileButton>
              <MobileButton
                href="https://www.linkedin.com/in/akash-singh-76542924b/"
                target="blank"
              >
                LinkedIn
              </MobileButton>
            </MobileButtonContainer>
          </MobileMenu>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
