import Link from "next/link";

import Social from "components/Social";
import { MyAbout } from "./styles";

export default function About() {
  return (
    <MyAbout>
      <h1 className="page-title">About</h1>
      <p>
        Hi there! <br />
        I’m Youness Hassani a self-taught Full-stack JavaScript/TypeScript
        developer, My Passion has been always technology, The fact that you can
        target a real-life problem and write software to solve it face the
        challenges and sometimes complex problems to simplify a complicated
        real-life problem is my passion, I love writing JS/TS code this is my
        main stack above its massive ecosystem, therefore love Reactjs and
        It&apos;s amazing framework Nextjs I also like to share my knowledge
        with others and for that I have my
        <Link href="/blog">
          <a className="link"> blog </a>
        </Link>
        and I’m so excited about the future 😃😃
      </p>
      <div className="contact-info-container">
        <p className="contact-paragraph">
          For business inquiries feel free to
          <Link href="/contact">
            <a className="link"> contact me </a>
          </Link>
        </p>
        <p className="contact-paragraph">Or Reach out to me Via:</p>
        <Social className="about-social" />
      </div>
    </MyAbout>
  );
}
