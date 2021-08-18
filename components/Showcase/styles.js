import styled from "styled-components";

export const MyShowcase = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;

  .section-title {
    text-align: center;
    margin: 1rem;
    border-bottom: solid 0.4rem ${({ theme }) => theme.yellowColor};
    margin-bottom: 4rem;
    color: ${({ theme }) => theme.darkLightPrimary};
    padding: 1rem;
  }

  .cards {
    display: flex;
    justify-content: space-around;
    width: 85%;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sm}) {
    .section-title {
      font-size: 1.8rem;
    }
  }
`;

export const MyCard = styled.div`
  width: 40rem;
  height: 25rem;
  border-radius: 1rem;
  padding: 2rem;
  margin: 1rem;
  box-shadow: 0 0 2.5rem #66666626;
  color: ${({ theme }) => theme.darkLightPrimary};

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-out;
  }
  .mask {
    border-radius: 1.3rem;
  }
  h3 {
    text-align: center;
    margin-right: 2rem;
  }
  p {
    color: ${({ theme }) => theme.CardParagraphColor};
    line-height: 1.8;
    margin-top: 1.5rem;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .dev-icons {
      background-color: ${({ theme }) => theme.darkLightPrimary};
      color: ${({ theme }) => theme.darkLightSecondary};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      border-radius: 50%;
      width: 7rem;
      height: 7rem;
      margin-right: 0.5rem;

      .icon {
        fill: currentColor;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.sm}) {
    .card-header {
      width: 27rem;
    }
    h3 {
      margin-right: 0.6rem;
      font-size: 1.5rem;
    }
  }
`;
