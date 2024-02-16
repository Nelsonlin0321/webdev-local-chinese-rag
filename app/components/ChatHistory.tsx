"use client";
import { Text } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import { useContext, useEffect, useState } from "react";
import { Accordion, Icon, Label } from "semantic-ui-react";
import ChatsContext from "../chats/ChatsContext";
const WordDocxViewer = dynamic(() => import("./WordDocxViewer"), {
  ssr: false,
});

const ChatHistory = () => {
  const { chats } = useContext(ChatsContext);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [chats]);

  return (
    <Accordion fluid styled>
      {chats.map((message, index) => (
        <div key={index}>
          <Accordion.Title
            active={activeIndex === index}
            onClick={() => {
              if (activeIndex == index) {
                setActiveIndex(-1);
              } else {
                setActiveIndex(index);
              }
            }}
          >
            <Icon name="dropdown" />
            {message.question}
            <div>
              <Label color="orange" ribbon="right">
                <p style={{ maxWidth: 256 }} className="truncate">
                  {message.file_name}
                </p>
              </Label>
            </div>
          </Accordion.Title>

          <Accordion.Content active={activeIndex === index}>
            <Text className="text-gray-800 mb-4 whitespace-pre-line">
              {message.answer}
            </Text>
            {activeIndex === index ? (
              <WordDocxViewer
                key={index} // Add key prop with a unique value
                uri={`https://d2gewc5xha837s.cloudfront.net/chinese-local-rag/${message.file_name}`}
              />
            ) : null}
          </Accordion.Content>
        </div>
      ))}
    </Accordion>
  );
};

export default ChatHistory;
