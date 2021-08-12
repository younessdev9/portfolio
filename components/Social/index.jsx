import { Github, Linkedin, Twitter } from "components/icons";

import styled from "styled-components";

const MySocial = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-around;
  color: white;

  .social-icons {
    fill: currentColor;
  }
`;

export default function Social(props) {
  return (
    <MySocial {...props}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/younessdev/"
      >
        <Linkedin
          width={28}
          height={28}
          alt="twitter"
          className="social-icons"
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/younessdev9">
        <Github width={28} height={28} alt="twitter" className="social-icons" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/younessdev">
        <Twitter
          width={28}
          height={28}
          alt="twitter"
          className="social-icons"
        />
      </a>
    </MySocial>
  );
}
