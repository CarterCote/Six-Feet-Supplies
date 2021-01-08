import React, { useState, useEffect } from 'react';
import logo from "../../images/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavText,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavLinkCaret,
  NavLinkDropdown,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const dropdownContent = () => {
    <>
    <NavLinks to='/products' onClick={closeMobileMenu}>Hi</NavLinks>
    <NavLinks to='/products' onClick={closeMobileMenu}>Hi</NavLinks>
    </>

  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu} style={{marginRight: ".5rem"}}>
              <img src={logo} alt="" style={{width: "34%"}}/>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Cities for Delivery
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/our-approach' onClick={closeMobileMenu}>
                  Our Procedures
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services' onClick={closeMobileMenu}>
                  Who We Are
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavText>Hi
                  <NavLinkCaret height="6" role="img" viewBox="0 0 10 6" width="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5.07223 5.1517L9.23083 1"></path>
                  </NavLinkCaret>
                </NavText>
                {dropdownContent && <NavLinkDropdown>{dropdownContent}</NavLinkDropdown>}
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button>SUPPORT BLM</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SUPPORT BLM
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
