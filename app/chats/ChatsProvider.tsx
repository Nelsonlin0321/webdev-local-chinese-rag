import React, { ReactNode, useEffect, useReducer } from "react";
import ChatsReducer from "./ChatsReducer";
import ChatsContext from "./ChatsContext";
import Chat from "../entities/Chat";

interface Props {
  children: ReactNode;
}

const ChatsProvider = ({ children }: Props) => {
  const initChat: Chat[] = [
    {
      context: "",
      question: "在自动研磨模式下，如何保护生产板？",
      file_name: "关于精密研磨优化改进制作说明.docx",
      answer:
        "在自动研磨模式下，当检测板厚小于0.15mm时，系统会报警提示请选择输送模式过板，以此保护生产板免受不必要的磨损或损坏。",
      uuid: "",
    },
    {
      context: "",
      question: "在自动研磨模式下，如何保护生产板？",
      file_name: "关于精密研磨优化改进制作说明.docx",
      answer:
        "在自动研磨模式下，当检测板厚小于0.15mm时，系统会报警提示请选择输送模式过板，以此保护生产板免受不必要的磨损或损坏。",
      uuid: "",
    },
  ];

  const [chats, chatsDispatch] = useReducer(ChatsReducer, initChat);

  useEffect(() => {
    const savedChatRecords = localStorage.getItem("chatRecords");
    if (savedChatRecords) {
      const parsedChatRecords: Chat[] = JSON.parse(savedChatRecords);
      if (parsedChatRecords.length > 0) {
        chatsDispatch({ type: "SET", chats: parsedChatRecords });
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatRecords", JSON.stringify(chats));
  }, [chats]);

  return (
    <ChatsContext.Provider value={{ chats, chatsDispatch }}>
      {children}
    </ChatsContext.Provider>
  );
};

export default ChatsProvider;
