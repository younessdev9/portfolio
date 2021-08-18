import styled from "styled-components";

export const MyPost = styled.div`
  margin: 1rem;
  width: 75rem;
  padding: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.07);
  border-radius: 0.8rem;

  .image-container {
    width: 100%;
    height: 40rem;
    border-radius: 1rem;
    position: relative;
  }

  .post-image {
    border-radius: 1rem;
  }
  .post-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem 0;

    h1 {
      font-size: 2.5rem;
      font-weight: 500;
      margin: 0;
    }
  }
  .post-excerpt {
    color: ${({ theme }) => theme.excerptColor};
    margin: 1rem 0 3rem;
    line-height: 1.7;
  }
  .italic-font {
    font-style: italic;
  }

  @media only screen and (max-width: ${({ theme }) => theme.md}) {
    width: 55rem;
    .image-container {
      height: 33rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.xd}) {
    width: 45rem;
    .image-container {
      height: 23rem;
    }

    .post-title {
      h1 {
        font-size: 2rem;
        font-weight: 500;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.sm}) {
    width: 35rem;
    .image-container {
      height: 18rem;
    }

    .post-title {
      margin-top: 1.5rem;
      h1 {
        font-size: 1.8rem;
        font-weight: 500;
        flex-basis: 100%;
      }

      p {
        margin: 1rem 0;
      }
    }
  }
`;
