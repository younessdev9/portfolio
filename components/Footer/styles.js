import styled from "styled-components";

export const MyFooter = styled.footer`
  padding: 2rem 4rem;
  min-height: 10rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(
    90.6deg,
    rgba(251, 146, 60, 0.51) -62.26%,
    rgba(239, 104, 83, 0.782166) 27.13%,
    #e54766 98.67%
  );

  .social {
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
      fill: currentColor;
    }
  }
  // 730px
  @media only screen and (max-width: ${({ theme }) => theme.xd}) {
    .footer-social {
      width: 23rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.sm}) {
    align-items: center;
    justify-content: center;
    p {
      margin: 2rem 0;
    }
  }
`;
