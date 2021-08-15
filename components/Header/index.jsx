import Image from "next/image";
import Link from "next/link";

import profile from "public/youness-hassani.jpg";
import { Button } from "../Button";
import { MyHeader, MyProfile } from "./styles";
import Social from "../Social";

export default function Header() {
  return (
    <MyHeader>
      <div className="info-container">
        <div className="title-container">
          <h1>
            Hi There! <br /> I&apos;m Youness Hassani <br />
          </h1>
          <span>
            A self-taught Full stack JavaScript & TypeScript Developer
          </span>
        </div>
        <div className="buttons-container">
          <Link href="/contact">
            <a>
              <Button>Lets Talk</Button>
            </a>
          </Link>
          <a
            className="resume-link"
            role="button"
            href="https://drive.google.com/file/d/1vzhyc0fS5virYS_2la3OLuYDp_gY11u8/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <MyProfile>
        <div className="img-wrapper">
          <Image
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            src={profile}
            alt="youness hassani"
            className="my-image"
          />
        </div>
        <Social />
      </MyProfile>
    </MyHeader>
  );
}
