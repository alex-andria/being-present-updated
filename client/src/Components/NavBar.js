import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import LogOutButton from "./LogOutButton";

function NavBar({user, setUser}) {
  return(
    // <Wrapper>
    //     <Logo>
    //         <Link to="/"><img className="logo" src={Logo1}/> </Link>
    //     </Logo>
        
    //     <Nav>
    //         <Button as={Link} to="/new">
    //         Home
    //         </Button>
    //         <LogOutButton setUser={setUser}/>
    //     </Nav>
      
    // </Wrapper>
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Be Present</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <button className="btn btn-primary">Profile</button>
          <LogOutButton setUser={setUser} />
        </div>
      </div>
    </div>
  </nav>
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
