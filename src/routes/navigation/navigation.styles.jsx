import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  background-color: #7fbcd2;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const WebsiteName = styled.p`
  font-weight: 600;
  font-size: 18px;
  font-style: italic;
  color: #000;
`;

export const LogoContainer = styled(Link)`
  text-decoration: none;
  height: 100%;
  width: 140px;
  padding: 25px;
`;

export const BrandContainer = styled.div`
  display: flex;
  text-decoration: none;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
