import { Dispatch } from "react";
import { Chat, ChatAction } from "./ChatsReducer";
import React from "react";

interface ChatsContextType {
  chats: Chat[];
  dispatch: Dispatch<ChatAction>;
}

const ChatsContext = React.createContext<ChatsContextType>(
  {} as ChatsContextType
);

export default ChatsContext;
