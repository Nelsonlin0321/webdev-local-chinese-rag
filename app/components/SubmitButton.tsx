import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import ChatsContext from "../chats/ChatsContext";

const SubmitButton = () => {
  const { chatsDispatch } = useContext(ChatsContext);

  return (
    <Button onClick={() => chatsDispatch({ type: "SET", chats: [] })}>
      Clear History
    </Button>
  );
};

export default SubmitButton;
