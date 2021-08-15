import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: gold;
  z-index: 1000;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transform: ${({ open = false }) =>
    open ? "translateX(0)" : "translateX(+100%)"};
  height: 100vh;
  text-align: left;
  width: 100%;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  background-color: rgb(192 68 65);

  .nav-menu-container {
    height: 45%;
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .toggle-theme {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      fill: white;
      cursor: pointer;
      .theme-icon {
        fill: white;
      }
    }
  }

  a {
    font-size: 1.5rem;
    padding: 2rem 0;
    font-weight: bold;
    transition: color 0.3s linear;
    color: white;

    &[aria-current] {
      color: ${({ theme }) => theme.yellowColor};
      font-weight: 600;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.md}) {
    visibility: hidden;
  }
`;

export const StyledBurger = styled.button`
  position: fixed;
  top: 1.6rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 3000;

  &:focus {
    outline: none;
  }

  div {
    width: 2.8rem;
    height: 0.3rem;
    background: white;
    border-radius: 7px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 3px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.md}) {
    visibility: hidden;
  }
`;
