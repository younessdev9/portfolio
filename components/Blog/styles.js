import styled from "styled-components";

export const MyBlog = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 4rem;
  h1 {
    text-align: left;
    margin-top: 2rem;
  }
`;

export const MyBlogPage = styled.article`
  max-width: 67.5rem;
  line-height: 1.8;
  margin: 1rem auto;
  padding: 1rem 1rem 4rem;

  .blog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .blog-title {
    margin: 2rem 0;
  }
  .blog-post-image {
    width: 100%;
    height: 40rem;
    border-radius: 1rem;
    position: relative;
    margin: 2rem 0.5rem;
  }

  .reading-time {
    color: ${({ theme }) => theme.CardParagraphColor};
    font-style: italic;
    margin-bottom: 2rem;
    border-bottom: solid 1px #555;
    padding: 1rem 0;
  }

  @media only screen and (max-width: ${({ theme }) => theme.xd}) {
    padding: 1rem 2rem 4rem;

    .blog-post-image {
      height: 29rem;
    }
    .blog-title {
      font-size: 1.7rem;
      flex-basis: 25rem;
    }
    time {
      font-size: 1.5rem;
      font-style: italic;
    }
    .reading-time {
      margin-top: 2rem;
    }
  }
`;
