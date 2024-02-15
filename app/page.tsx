import { Flex } from "@radix-ui/themes";
import FileUploader from "./components/FileUploader";
import { Chatbot } from "./components/Chatbot";

export default async function Home() {
  return (
    <>
      <Flex
        className="justify-center items-center mb-10"
        direction="column"
        gap={"4"}
      >
        <FileUploader />
        <Chatbot />
      </Flex>
    </>
  );
}

export const dynamic = "force-dynamic";
