import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const TOKEN_NAME = "token";

export const setAuthToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export const getPages = (totalPages) => {
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return pages;
};

// 路徑改變就自動到 TOP
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const ClickTop = styled.div`
  cursor: pointer;
  padding: 4px 8px;
  font-size: 14px;
  position: fixed;
  bottom: 5%;
  right: 5%;
  color: #eee;
  background: #222;
  z-index: 5;
  opacity: 0.6;
  :hover {
    opacity: 0.9;
  }
`;

export const scrollToAnchor = (anchorName) => {
  if (anchorName) {
    let anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView();
    }
  }
};
