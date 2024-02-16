"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ChatsProvider from "../chats/ChatsProvider";
import { Flex } from "@radix-ui/themes";
import FileUploader from "./FileUploader";
import FileSearcher from "./FileSearcher";

const queryClient = new QueryClient();

const Chatbot = () => {
  const [fileName, setFileName] = useState("");

  return (
    <QueryClientProvider client={queryClient}>
      <ChatsProvider>
        <Flex
          className="justify-center items-center mb-10"
          direction="column"
          gap={"4"}
        >
          <FileUploader />
          <FileSearcher setFileName={setFileName} />
          {/* <QuestionField /> */}

          {/* <ChatHistory /> */}

          {/* <Button onClick={() => setChatRecords([])}>Clear History</Button> */}
        </Flex>
      </ChatsProvider>
    </QueryClientProvider>
  );
};

export default Chatbot;
