import React from 'react'
import Navigation from './Navigation'
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components"



const Header = ({ itemCount, handleToggle, isDisplayCart }) => {

  return (
    <HeaderSection>
      <Navigation />
      <Button isDisplayCart={isDisplayCart} onClick={handleToggle}>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
      </Button>
    </HeaderSection>
  )
}

const Button = styled.button`
 display: ${props => (!props.isDisplayCart) && 'none'};
  border: none;
  background-color: unset;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin:0;
`;



export default Header
