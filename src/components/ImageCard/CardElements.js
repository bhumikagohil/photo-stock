import { FaBookmark, FaHeart, FaComment } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: .6rem
`;

export const Author = styled.p`
  font-size: .7rem;
  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 576px) {
    font-size: .6rem;
  }
`;
export const Image = styled.img`
  width: 200px;
  height: 200px;
  @media screen and (min-width: 992px) {
    height: 400px;
    width: 400px;
  }
  @media screen and (max-width: 576px) {
    width: 150px;
    height: 150px;
  }
`;

export const Body = styled.div`
  margin: 20px;
`;
