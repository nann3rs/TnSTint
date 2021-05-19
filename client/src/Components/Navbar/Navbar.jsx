import React, { useState } from 'react';
import { AiOutlineCar } from 'react-icons/ai';
import { Button } from '../../GlobalStyles.jsx';
import
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    Menu,
    MenuItem,
    MenuLink,
    MenuItemBtn,
    MenuLinkBtn,
    MenuIcon,
} from './Navbar.styles.jsx';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div>
          <Nav>
            <NavbarContainer>
              <NavLogo to="/">
                <NavIcon />
                T&S Tinting
              </NavLogo>
              <MenuIcon onClick={handleClick}>
                { AiOutlineCar }
              </MenuIcon>
              <Menu onClick={handleClick} click={click}>
                  <MenuItem>
                      <MenuLink onClick="" to="/">Home</MenuLink>
                  </MenuItem>
                  <MenuItem>
                      <MenuLink onClick="" to="/about">About</MenuLink>
                  </MenuItem>
                  <MenuItem>
                      <MenuLink onClick="">Get A Quote</MenuLink>
                  </MenuItem>
                  <MenuItemBtn>
                      <MenuLinkBtn to="/contact">
                          <Button primary>Contact Us</Button>
                      </MenuLinkBtn>
                  </MenuItemBtn>
              </Menu>
            </NavbarContainer>
          </Nav>
        </div>
    )
}

export default Navbar;