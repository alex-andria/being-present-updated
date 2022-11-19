import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import LogOutButton from "./LogOutButton";
import Logo1 from '../Logo1.png';

function NavBar({user, setUser}) {
  return(
    <Wrapper>
        <Logo>
            <Link to="/"><img className="logo" src={Logo1}/> </Link>
        </Logo>
        
        <Nav>
            <Button as={Link} to="/new">
            Home
            </Button>
            <LogOutButton setUser={setUser}/>
        </Nav>
      
    </Wrapper>
  )
}
export default NavBar;

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;
