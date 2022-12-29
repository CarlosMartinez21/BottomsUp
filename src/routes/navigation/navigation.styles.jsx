import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled.div`
  text-decoration: none;
  height: 100%;
  width: 100px;
  margin-left: 0px;
  justif
`;

export const NavLinks = styled.div`
  a {
    color: #fff;
    &:hover {
      text-decoration: underline;
      color: #fff;
    }
  }

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const WebsiteName = styled.p`
  display: inline-block;
  font-weight: 600;
  font-size: 24px;
  font-style: italic;
  color: #fff;
`;
