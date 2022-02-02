import React from 'react'

import {HeaderContainer, Title, Icon} from "./Header.styled"

function Header() {
  return (
  <HeaderContainer>
    <Icon className='Icon' />
    <Title className="Title">List Software</Title>
  </HeaderContainer>
    );
}

export default Header;