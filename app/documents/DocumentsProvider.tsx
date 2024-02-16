import React, { ReactNode, useEffect, useReducer } from "react";
import DocumentsReducer from "./DocumentsReducer";
import { Document } from "./DocumentsReducer";
import apiClient from "../services/api-client";
import DocumentsContext from "./DocumentsContext";

interface Props {
  children: ReactNode;
}

const DocumentsProvider = ({ children }: Props) => {
  const [documents, documentsDispatch] = useReducer(DocumentsReducer, []);

  useEffect(() => {
    apiClient
      .get<Document[]>("/RAG/documents")
      .then((res) => documentsDispatch({ type: "SET", documents: res.data }));
  }, []);

  return (
    <DocumentsContext.Provider value={{ documents, documentsDispatch }}>
      {children}
    </DocumentsContext.Provider>
  );
};

export default DocumentsProvider;
