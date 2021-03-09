import { FaBars, FaCameraRetro, FaWindowClose } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 32px;
  display: flex;
  background-color: #eee;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  color: #7b8585;
  cursor: pointer;
  &.active {
    color: #fff;
    background-color: #41c7c2;
  }
  &.hover {
    background-color: #beecea;
  }
`;
export const Logo = styled(FaCameraRetro)`
  @media screen and (min-width: 576px) {
    font-size: 2rem;
  }
  font-size: 1.4rem;
  stroke: #41c7c2;
  stroke-width: 20;
  color: #000;
  margin: auto 0.6rem;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #7b8585;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

export const Close = styled(FaWindowClose)`
  color: #000;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SideBar = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    background-color: #eee;
    height: 100vh;
    width: 180px;
    positon: absolute;
    opacity: 1;
    visibility: visible;
    transition: all 0.25s ease;
    transform: translateX(0);
  }
`;

export const SideBarLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  height: 20px;
  color: #7b8585;
  cursor: pointer;
  &.active {
    color: #fff;
    background-color: #41c7c2;
    width: 40%;
  }
  &.hover {
    background-color: #beecea;
  }
`;
