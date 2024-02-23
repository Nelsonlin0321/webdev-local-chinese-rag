"use client";
import React, { useState } from "react";
import { AxiosError } from "axios";
import Spinner from "./Spinner";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "semantic-ui-react";
import { axiosInstance } from "../services/api-client";
const FileUploader = () => {
  const [file, setFile] = useState<File>();
  const [isSubmitting, setSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    if (!file.name.endsWith(".docx")) {
      toast.error("只支持 Word Docx 文档！", { duration: 1000 });
      return;
    }
    setSubmitting(true);
    try {
      const data = new FormData();
      data.set("file", file);
      await axiosInstance.post("/RAG/ingest_file", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.refresh();
      toast.success("上传文档成功！", { duration: 1000 });
    } catch (error) {
      const response = (error as AxiosError).response?.data;
      const message = (response as { message: string }).message;
      const errorMessage = message || "上传文档失败！";
      toast.error(errorMessage, { duration: 1000 });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={onSubmit}>
        <input
          className="mb-2 block w-full cursor-pointer rounded-lg border-2 bg-slate-50"
          type="file"
          name="file"
          onChange={(e) => {
            if (e.target.files !== null) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <Button
          type="submit"
          className="cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? "上传并且处理文件中..." : "上传文件"}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
      <Toaster />
    </div>
  );
};

export default FileUploader;
