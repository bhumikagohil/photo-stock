import React, { useState } from "react";
import {
  Close,
  Nav,
  NavLink,
  Logo,
  Bars,
  NavMenu,
  SideBar,
  SideBarLinks,
} from "./NavElements";

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/saved-images", name: "Saved" },
  { path: "/profile", name: "Profile" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openSidebar = () => {
    setOpenMenu(true);
  };

  const closeSidebar = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <Nav>
        <Logo exact to="/" />
        <Bars onClick={openSidebar} />
        {openMenu && (
          <SideBar>
            <Close onClick={closeSidebar} />
            <ul>
              {navLinks.map((navLink) => (
                <SideBarLinks exact to={navLink.path} activeStyle>
                  {navLink.name}
                </SideBarLinks>
              ))}
            </ul>
          </SideBar>
        )}

        <NavMenu>
          {navLinks.map((navLink) => (
            <NavLink exact to={navLink.path} activeStyle>
              {navLink.name}
            </NavLink>
          ))}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
