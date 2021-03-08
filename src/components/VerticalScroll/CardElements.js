import { FaBookmark, FaHeart, FaComment } from "react-icons/fa";
import styled, { css } from "styled-components";

const btnProps = css`
  display: flex;
  float: right;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    font-size: 2rem;
  }
  font-size: 1.4rem;
  padding: 0 1rem;
`;

const iconProps = css`
  @media screen and (min-width: 576px) {
    font-size: 2rem;
  }
  font-size: 1.4rem;
  stroke: black;
  stroke-width: 30;
  color: #fff;
  margin: auto 0.6rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  @media screen and (min-width: 1200px) {
    height: 1000px;
  }
  @media screen and (min-width: 992px) {
    height: 900px;
  }
  @media screen and (min-width: 768px) {
    height: 600px;
  }
  @media screen and (min-width: 576px) {
    height: 400px;
  }
`;

export const Body = styled.div`
  height: 75%;
  width: 100%;
  margin: 10px 0;
`;

export const Footer = styled.div`
  margin: 10px;
  width: 100%;
  height: 25%;
`;

export const Bookmark = styled(FaBookmark)`
  cursor: pointer;
  margin-left: 4px;
`;

export const Heart = styled(FaHeart)`
  ${iconProps}
`;

export const Comment = styled(FaComment)`
  ${iconProps}
`;

export const Button = styled(FaBookmark)`
  ${btnProps};
  ${iconProps}
`;

export const ActiveButton = styled(FaBookmark)`
  ${btnProps};
  margin: auto 0.6rem;
  color: #41c7c2;
`;
