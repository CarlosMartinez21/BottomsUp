import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/martini.svg";
import {
  LogoContainer,
  NavLink,
  NavLinks,
  NavigationContainer,
  WebsiteName,
  BrandContainer,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <BrandContainer>
            <Logo className="logo"></Logo>
            <WebsiteName>Bottoms Up</WebsiteName>
          </BrandContainer>
        </LogoContainer>
        <NavLinks>
          <NavLink to="ingredients">By Ingredients</NavLink>
          <NavLink to="name">By Name</NavLink>
          <NavLink to="name">Random Drinks</NavLink>
          <NavLink to="sign in">Sign In</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
