import { Flex } from "@radix-ui/themes";
import ChatsProvider from "./chats/ChatsProvider";
import FileUploader from "./components/FileUploader";
import DocumentsProvider from "./documents/DocumentsProvider";
import FileSearcher from "./components/FileSearcher";
import QuestionField from "./components/QuestionField";
import ChatHistory from "./components/ChatHistory";

export default async function Home() {
  return (
    <DocumentsProvider>
      <ChatsProvider>
        <Flex
          className="justify-center items-center mb-10"
          direction="column"
          gap={"4"}
        >
          <FileUploader />
          <FileSearcher />
          <QuestionField />

          {/* <ChatHistory /> */}

          {/* <Button onClick={() => setChatRecords([])}>Clear History</Button> */}
        </Flex>
      </ChatsProvider>
    </DocumentsProvider>
  );
}

export const dynamic = "force-dynamic";
