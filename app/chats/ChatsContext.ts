import { Dispatch } from "react";
import { ChatAction } from "./ChatsReducer";
import React from "react";
import Chat from "../entities/Chat";

interface ChatsContextType {
  chats: Chat[];
  chatsDispatch: Dispatch<ChatAction>;
}

const ChatsContext = React.createContext<ChatsContextType>(
  {} as ChatsContextType
);

export default ChatsContext;
