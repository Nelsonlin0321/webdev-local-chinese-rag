"use client";
import { Heading, TextField } from "@radix-ui/themes";
import { useContext, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "semantic-ui-react";
import ChatsContext from "../chats/ChatsContext";
import Chat from "../entities/Chat";
import useDocuments from "../hooks/useDocuments";
import APIClient from "../services/api-client";
import Spinner from "./Spinner";

const apiClient = new APIClient<Chat>("/RAG/retrieval_generate");

const QuestionField = ({ fileName }: { fileName: string }) => {
  const { data: documentsResponse, isLoading } = useDocuments();
  const { chatsDispatch } = useContext(ChatsContext);

  const listOfDocument = documentsResponse?.results
    ? documentsResponse.results
    : [];

  const fileNames = listOfDocument.map((doc) => doc.file_name);

  const questionRef = useRef<HTMLInputElement>(null);
  const contextRef = useRef<HTMLInputElement>(null);

  const [isAnswering, setAnswering] = useState(false);

  const submitData: {
    question: string;
    file_name: string;
    context?: null | string;
  } = { question: "", file_name: fileName };

  return (
    <div className="w-full">
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          if (questionRef.current) {
            if (questionRef.current.value.length < 5) {
              toast.error("问题少于5个字");
              return;
            }

            if (!fileNames.includes(fileName)) {
              toast.error("你选择的文档不存在!");
              return;
            }
            submitData.question = questionRef.current.value;
            if (contextRef.current) {
              submitData.context = contextRef.current.value;
            }

            setAnswering(true);
            try {
              await apiClient.post(submitData).then((res) => {
                chatsDispatch({ type: "ADD", chat: res });
                setAnswering(false);
              });
            } catch (error) {
              const errorMessage = "未知错误";
              toast.error(errorMessage, { duration: 1000 });
            } finally {
              setAnswering(false);
            }
          }
        }}
      >
        <div>
          <Heading size={"2"}>用于更好地搜索相关内容的上下文： [可选]</Heading>
          <TextField.Root className="mb-2">
            <TextField.Input
              placeholder="自动研磨模式,保护生产板"
              ref={contextRef}
            />
          </TextField.Root>
          <Heading size={"2"}>检索于文档相关的问题：</Heading>
          <TextField.Root className="mb-2">
            <TextField.Input
              placeholder="在自动研磨模式下，如何保护生产板？"
              ref={questionRef}
            />
          </TextField.Root>

          <Button
            type="submit"
            className="cursor-pointer"
            color="blue"
            disabled={isAnswering || isLoading}
          >
            {isAnswering ? "检索生成中..." : "检索生成"}
            {isAnswering && <Spinner />}
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default QuestionField;
