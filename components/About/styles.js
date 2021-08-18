import styled from "styled-components";

export const MyAbout = styled.div`
  line-height: 1.8;
  padding: 3rem;
  max-width: 80rem;
  margin: auto;
  font-size: 2rem;

  .link {
    color: ${({ theme }) => theme.blueColor};
    &:hover {
      text-decoration: underline;
    }
  }
  .contact-info-container {
    display: flex;
    flex-direction: column;
  }
  .contact-paragraph {
    margin-top: 3rem;
  }

  .about-social {
    color: ${({ theme }) => theme.darkLightPrimary};
    justify-content: space-between;
    width: 25rem;
    margin-top: 3rem;
    align-self: center;
  }

  @media only screen and (max-width: ${({ theme }) => theme.xd}) {
    padding: 1rem;
    padding-bottom: 4rem;
  }
`;
