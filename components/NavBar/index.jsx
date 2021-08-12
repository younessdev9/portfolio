import Image from "next/image";

import NavLink from "components/NavLink";
import { MoonIcon, SunIcon } from "components/icons";
import { Burger } from "components/Menu";

import { NavBarContainer, MyNavBar } from "./styles";
import Link from "next/link";

export default function NavBar({ toggleTheme, currentTheme, open, setOpen }) {
  return (
    <NavBarContainer>
      <MyNavBar>
        <Link href="/" passHref>
          <a>
            <Image
              src="/logo.svg"
              alt="logo"
              width={35}
              height={35}
              className="home-icon"
            />
          </a>
        </Link>
        <div className="nav-burger">
          <Burger open={open} setOpen={setOpen} />
        </div>
        <div className="nav-links">
          <NavLink href="/">
            <a>Home</a>
          </NavLink>
          <NavLink href="/blog">
            <a>Blog</a>
          </NavLink>
          <NavLink href="/about">
            <a>About</a>
          </NavLink>
          <NavLink href="/contact">
            <a>Contact</a>
          </NavLink>
          <div onClick={toggleTheme} className="toggle-theme">
            {currentTheme === "dark" ? (
              <SunIcon width={30} fillColor="#FFF" />
            ) : (
              <MoonIcon width={30} fillColor="#FFF" />
            )}
          </div>
        </div>
      </MyNavBar>
    </NavBarContainer>
  );
}
