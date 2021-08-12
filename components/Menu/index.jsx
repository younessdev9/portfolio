import { MoonIcon, SunIcon } from 'components/icons';

import NavLink from '../NavLink';
import { StyledMenu, StyledBurger } from './styles';

export const Menu = ({ open, setOpen, theme, toggleTheme }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen((prev) => !prev)}>
      <div className="nav-menu-container">
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
          {theme === 'dark' ? (
            <SunIcon width={30} fillColor="#FFF" />
          ) : (
            <MoonIcon width={30} fillColor="#FFF" />
          )}
        </div>
      </div>
    </StyledMenu>
  );
};

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
