"use client";
import React, { useEffect, useState } from "react";
import SelectDocsAsk from "./SelectDocsAsk";
import ChatHistory from "./ChatHistory";
import { Button } from "semantic-ui-react";

export interface chatRecord {
  question: string;
  file_name: string;
  answer: string;
  uuid: string;
}

export const Chatbot = () => {
  return (
    <>
      <SelectDocsAsk
        fileNames={fileNames}
        setChatRecords={setChatRecords}
        chatRecords={chatRecords}
      />
      <ChatHistory chatRecords={chatRecords} />
      <Button onClick={() => setChatRecords([])}>Clear History</Button>
    </>
  );
};
