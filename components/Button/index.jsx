import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.darkLightSecondary};
  color: ${({ theme }) => theme.darkLightPrimary};
  border: none;
  padding: 1rem;
  font-size: 1.9rem;
  width: ${({ width }) => (width ? width : "15rem")};
  border-radius: 0.8rem;
  background-size: 400%;
  font-weight: 600;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 rgba(241, 23, 18, 0.65);
  transition: ease-out 0.3s;
  outline: none;

  &:hover {
    box-shadow: inset 20rem 0 0 0 ${({ theme }) => theme.yellowColor};
    color: black;
  }
`;
