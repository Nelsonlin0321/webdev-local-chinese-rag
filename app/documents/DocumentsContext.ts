import { Dispatch } from "react";
import React from "react";
import { DocumentAction, Document } from "./DocumentsReducer";

interface DocumentsContextType {
  documents: Document[];
  documentsDispatch: Dispatch<DocumentAction>;
}

const DocumentsContext = React.createContext<DocumentsContextType>(
  {} as DocumentsContextType
);

export default DocumentsContext;
