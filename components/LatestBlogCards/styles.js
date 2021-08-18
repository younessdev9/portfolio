import styled from "styled-components";

export const MyLatestArticles = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;
  padding: 1rem;
  padding-bottom: 3rem;

  .article-title {
    text-align: center;
    margin: 1rem;
    border-bottom: solid 0.4rem ${({ theme }) => theme.yellowColor};
    margin-bottom: 4rem;
    color: ${({ theme }) => theme.darkLightPrimary};
    padding: 1rem;
  }

  .articles {
    display: flex;
    justify-content: space-around;
    width: 90%;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sm}) {
    .article-title {
      font-size: 1.8rem;
    }
  }
`;

export const MyLatestArticlesCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;

  .square:hover {
    transform: scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }

  .square {
    width: 46rem;
    height: 43rem;

    border-radius: 1rem;
    box-shadow: 0 0 2.5rem #66666630;
    transition: all 0.3s ease-out;
  }

  .mask {
    clip: rect(0px, 46rem, 22rem, 0px);
    border-radius: 0.4rem;
    position: absolute;
    border-radius: 1.3rem;
  }
  .inner-image {
    position: absolute;
    border-radius: 1rem;
  }

  img {
    width: 46rem;
  }

  h1 {
    margin: auto;
    text-align: left;
    margin-top: 24rem;
    padding-left: 3rem;
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.darkLightPrimary};
  }
  p {
    padding-left: 3rem;
    padding-right: 3rem;
    margin-top: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.cardParagraphColor};
    line-height: 1.5;
  }
  .card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    margin-top: 2rem;
    .blog-button {
      width: 10rem;
      font-size: 1.4rem;
      font-weight: 300;
      background-color: #22d3ee;
      border-radius: 0.5rem;
      border: none;
      padding: 1rem 1.5rem;
      color: white;
      cursor: pointer;
    }
    time {
      color: ${({ theme }) => theme.darkLightPrimary};
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.sm}) {
    .square {
      width: 35rem;
    }
    .mask {
      width: 35rem;
    }
  }

  h1 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.3rem;
  }

  time {
    font-size: 1.3rem;
    font-style: italic;
  }
`;
