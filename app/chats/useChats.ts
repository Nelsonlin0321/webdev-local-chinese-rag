import { useContext } from "react";
import ChatsContext from "./ChatsContext";

const useChats = () => {
  return useContext(ChatsContext);
};

export default useChats;
