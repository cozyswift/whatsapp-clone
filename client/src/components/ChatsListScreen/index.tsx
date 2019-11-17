import React from 'react';
import ChatsNavbar from './ChatNavbar';
import ChatsList from './ChatsList';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
`;

function ChatsListScreen() {
  return (
      <Container>
          <ChatsNavbar />
      <ChatsList />
      </Container>
  );
}

export default ChatsListScreen;
