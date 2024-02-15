import { Flex } from "@radix-ui/themes";
import Banner from "./components/Banner";
import FileUploader from "./components/FileUploader";
import { Chatbot } from "./components/Chatbot";
import NavBar from "./NavBar";

export default async function Home() {
  return (
    <>
      <Flex
        className="justify-center items-center mb-10"
        direction="column"
        gap={"4"}
      >
        {/* <FileUploader />
      <Chatbot /> */}
      </Flex>
    </>
  );
}

export const dynamic = "force-dynamic";
