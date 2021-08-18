import styled from "styled-components";

export const MyHeading1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-top: 3rem;
`;
export const MyHeading2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 3rem;
`;
export const MyHeading3 = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 3rem;
`;
export const MyParagraph = styled.p`
  margin-bottom: 2rem;
  font-size: 1.9rem;
  color: ${({ theme }) => theme.textColor};

  @media only screen and (max-width: ${({ theme }) => theme.xd}) {
    font-size: 1.5rem;
  }
`;
export const MyOl = styled.ol`
  margin-left: 2rem;
  font-weight: 700;
  margin-top: 3rem;
`;
export const MyUl = styled.ul`
  margin-left: 2rem;
  font-weight: 700;
`;
export const MyLink = styled.a`
  color: ${({ theme }) => theme.blueColor};

  &:hover {
    text-decoration: underline;
  }
`;
export const HLight = styled.span`
  color: ${({ theme }) => theme.redColor};
`;
export const Quote = styled.div`
  border-left: 2px green solid;
  padding: 1rem;
  margin: 1rem 0;
  background-color: ${({ theme }) => theme.bgQuote};
`;
