import { Dispatch } from "react";
import { Chat, ChatAction } from "./ChatsReducer";
import React from "react";

interface ChatsContextType {
  chats: Chat[];
  chatsDispatch: Dispatch<ChatAction>;
}

const ChatsContext = React.createContext<ChatsContextType>(
  {} as ChatsContextType
);

export default ChatsContext;
