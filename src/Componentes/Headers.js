import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Headers = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Achadinho Pet's</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/animais">Animais</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/animais.js">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/cadastro'>Cadastre-se</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/login'>Login</NavLink>
            </NavItem>

          </Nav>

        </Collapse>
      </Navbar>
    </div>
  )
};

export default Headers;