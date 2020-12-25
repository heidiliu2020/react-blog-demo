import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  text-align: center;
  padding: 6px;
  letter-spacing: 1px;
  background: #000;
  color: #eee;

  & a {
    text-decoration: none;
    color: #338ccc;
  }
  & a:hover {
    color: #eee;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      © 2020{" "}
      <a
        href="https://github.com/heidiliu2020"
        rel="noreferrer"
        target="_blank"
      >
        Heidi
      </a>
      {" ♥ "}
      Powered by React
    </FooterContainer>
  );
}
