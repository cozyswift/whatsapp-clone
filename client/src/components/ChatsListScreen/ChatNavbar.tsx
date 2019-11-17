import React from 'react';
import { Toolbar } from '@material-ui/core';
import styled from 'styled-components';
const Conatiner = styled(Toolbar)`
  background-color: var(--primary-bg);
  color: var(--primary-text);
  font-size: 20px;
  line-height: 40px;
`;

function ChatsNavbar() {
  return <Conatiner>WhatsApp Clone</Conatiner>
}

// const ChatsNavbar: React.FC = () => <div>Whatsapp Clone</div>;
export default ChatsNavbar;
