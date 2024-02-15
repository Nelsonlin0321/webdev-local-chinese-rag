export interface Chat {
  context: string;
  question: string;
  file_name: string;
  answer: string;
  uuid: string;
}

interface AddChat {
  type: "ADD";
  chat: Chat;
}

interface ClearChats {
  type: "DELETE";
}

export type ChatAction = AddChat | ClearChats;

const ChatsReducer = (chats: Chat[], action: ChatAction): Chat[] => {
  switch (action.type) {
    case "ADD":
      return [action.chat, ...chats];
    case "DELETE":
      return [];
  }
};

export default ChatsReducer;
