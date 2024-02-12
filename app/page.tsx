import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";
import Banner from "./components/Banner";
import FileUploader from "./components/FileUploader";
import { Chatbot } from "./components/Chatbot";

export default async function Home() {
  const documents = await prisma.document.findMany();
  const fileNames = documents.map(({ id, fileName }) => fileName);

  return (
    <Flex
      className="justify-center items-center mb-10"
      direction="column"
      gap={"4"}
    >
      <Banner />
      <FileUploader />
      <Chatbot fileNames={fileNames} />
    </Flex>
  );
}

export const dynamic = "force-dynamic";
