import Chat from "../entities/Chat";

interface AddChat {
  type: "ADD";
  chat: Chat;
}

interface ClearChats {
  type: "DELETE";
}

interface SetChats {
  type: "SET";
  chats: Chat[];
}

export type ChatAction = AddChat | ClearChats | SetChats;

const ChatsReducer = (chats: Chat[], action: ChatAction): Chat[] => {
  switch (action.type) {
    case "ADD":
      return [action.chat, ...chats];
    case "DELETE":
      return [];
    case "SET":
      return action.chats;
  }
};

export default ChatsReducer;
