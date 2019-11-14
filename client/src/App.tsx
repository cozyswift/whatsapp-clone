import React from 'react';
import ChatsList from './components/ChatsList';
import ChatNavbar from './components/ChatNavbar';

const App: React.FC = () => {
  return (
    <div>
      <ChatNavbar/>
      <ChatsList />
    </div>
  );
};

export default App;
