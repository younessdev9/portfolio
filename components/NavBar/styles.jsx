import styled from "styled-components";

export const NavBarContainer = styled.nav`
  background: linear-gradient(
    99.5deg,
    #0099f7 0%,
    rgba(112, 93, 141, 0.83776) 51.25%,
    rgba(241, 23, 18, 0.65) 99.58%
  );
`;

export const MyNavBar = styled.div`
  width: 75%;
  margin: 0 auto;
  height: 6rem;
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  .home-icon {
    cursor: pointer;
  }
  .nav-links {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }
  a {
    color: white;
    padding: 1rem;

    &[aria-current] {
      color: ${({ theme }) => theme.yellowColor};
      font-weight: 600;
    }
  }
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
  // mx-w=900px
  @media only screen and (max-width: ${({ theme }) => theme.md}) {
    width: 95%;
    .nav-links {
      display: none;
    }

    .nav-burger {
      display: block;
    }
  }
`;
