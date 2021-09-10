import { ChatForm } from '../../components/ChatForm/ChatForm';
import { MessageList } from '../../components/MessageList/MessageList';
import { ChatList } from '../../components/ChatList/ChatList'
import { useParams,Redirect } from "react-router-dom";
import { chatsConnect } from '../../connects/chats';


export const ChatsRender = function (props) {


  const { chatId } = useParams();

  if (chatId && !props.chats.some(c => c.id === chatId))
    return <Redirect to="/nochat" />

  return (
    <div className="App-container">
      <ChatList
      ></ChatList>
      <div>
        <MessageList> </MessageList>
        <ChatForm></ChatForm>
      </div>
    </div>
  )
};

export const Chats = chatsConnect(ChatsRender);
