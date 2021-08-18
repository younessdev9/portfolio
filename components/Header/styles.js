import styled from "styled-components";

export const MyHeader = styled.header`
  width: 100%;
  min-height: 50rem;
  padding: 1rem;
  padding-top: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  background: linear-gradient(
    99.5deg,
    #0099f7 0%,
    rgba(112, 93, 141, 0.83776) 51.25%,
    rgba(241, 23, 18, 0.65) 99.58%
  );
  .info-container {
    width: 45%;
    flex-basis: 57rem;

    .title-container {
      h1 {
        width: 40rem;
        font-size: 4rem;
        line-height: 1.6;
        font-weight: 700;
        color: white;
        margin-bottom: 2rem;
      }

      span {
        font-size: 1.7rem;
        line-height: 2;
        color: white;
      }
    }

    .buttons-container {
      margin-top: 2rem;
      display: flex;
      .resume-link {
        display: inline-block;
        width: 10rem;
        margin: 1rem 3rem;
        font-weight: 600;
        border-bottom: solid 0.4rem #facc15;
        color: white;
        text-align: center;
        padding-bottom: 1rem;
      }
    }
  }
  // mx-w=900px
  @media only screen and (max-width: ${({ theme }) => theme.md}) {
    padding-top: 2rem;
    flex-direction: column;
    align-items: center;
    .info-container {
      flex-basis: 20rem;
      height: auto;
    }
  }
  // mx-w=700px
  @media only screen and (max-width: ${({ theme }) => theme.xd}) {
    .info-container {
      width: 80%;
    }
  }
  // 500px
  @media only screen and (max-width: ${({ theme }) => theme.sm}) {
    .info-container {
      .title-container {
        h1 {
          font-size: 2.3rem;
          width: auto;
        }
        span {
          font-size: 1.5rem;
        }
      }
    }
    .resume-link {
      display: flex;
    }
  }
`;

export const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-bottom: 3rem;
  }
  .img-wrapper {
    position: relative;
    height: 20rem;
    width: 20rem;
    .my-image {
      border-radius: 50%;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.md}) {
    .img-wrapper {
      display: none;
    }
  }
`;
