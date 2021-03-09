import styled from "styled-components";

export const Container = styled.div`
  margin: 10px;
  height: 100px;
  @media screen and (min-width: 768px) {
    height: 120px;
  }
  @media screen and (max-width: 576px) {
    height: 60px;
    margin: 5px;
  }
  background: linear-gradient(
    45deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d
  );
  border-radius: 50%;
  padding: 2px;
`;

export const Image = styled.img`
  height: 98%;
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
  @media screen and (max-width: 576px) {
    width: 60px;
  }
  border-radius: 50%;
`;
