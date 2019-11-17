import React from 'react';
import moment from 'moment';
import { List, ListItem } from '@material-ui/core';
import styled from 'styled-components';
import { useState, useMemo } from 'react';

const Container = styled.div`
  height: calc(100% - 56px);
  overflow-y: overlay;
`;
const StyledList = styled(List)`
  padding: 0 !important;
`;
const StyledListItem = styled(ListItem)`
  height: 76px;
  padding: 0 15px;
  display: flex;
`;
const ChatPicture = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;
const ChatInfo = styled.div`
  width: calc(100% - 60px);
  height: 46px;
  padding: 15px 0;
  margin-left: 10px;
  border-bottom: 0.5px solid silver;
  position: relative;
`;
const ChatName = styled.div`
  margin-top: 5px;
`;
const MessageContent = styled.div`
  color: gray;
  font-size: 15px;
  margin-top: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const MessageDate = styled.div`
  position: absolute;
  color: gray;
  top: 20px;
  right: 0;
  font-size: 13px;
`;

function ChatsList() {
  const [chats, setChats] = useState<any[]>([]);

  useMemo(async () => {
    const body = await fetch(`${process.env.REACT_APP_SERVER_URL}`);
    const chats = await body.json();
    setChats(chats);
  }, []);

  return (
    <Container>
      <StyledList>
        {chats.map(chat => (
          <StyledListItem key={chat!.id} button>
            {/* key영역에 id값을 부여 함으로써 각 엘리먼트를 구별할 수 있도록 해준다. */}
            <ChatPicture src={chat.picture} alt="Profile" />
            <ChatInfo>
              <ChatName>{chat.name}</ChatName>
              {chat.lastMessage && (
                // {/* return 값이 없을 수 있는 상황에서는 반드시 null인지 undifineded인지 유효성 검사를 해주어야 한다 */}
                <React.Fragment>
                  <MessageContent>{chat.lastMessage.content}</MessageContent>
                  <MessageDate>
                    {moment(chat.lastMessage.createdAt).format(`HH:mm`)}
                  </MessageDate>
                </React.Fragment>
              )}
            </ChatInfo>
          </StyledListItem>
        ))}
      </StyledList>
    </Container>
  );
}

// function ChatsList() {
//   return (
//     <Container>
//       <StyledList>
//         {chats.map(chat => (
//           <StyledListItem key={chat.id} button>
//             {/* key영역에 id값을 부여 함으로써 각 엘리먼트를 구별할 수 있도록 해준다. */}
//             <ChatPicture src={chat.picture} alt="Profile" />
//             <ChatInfo>
//               <ChatName>{chat.name}</ChatName>
//               {/* return 값이 없을 수 있는 상황에서는 반드시 null인지 undifineded인지 유효성 검사를 해주어야 한다 */}
//               {chat.lastMessage && (
//                 <React.Fragment>
//                   <MessageContent>{chat.lastMessage.content}</MessageContent>
//                   <MessageDate>
//                     {moment(chat.lastMessage.createdAt).format('HH:mm')}
//                   </MessageDate>
//                 </React.Fragment>
//               )}
//             </ChatInfo>
//           </StyledListItem>
//         ))}
//       </StyledList>
//     </Container>
//   );
// }

export default ChatsList;
