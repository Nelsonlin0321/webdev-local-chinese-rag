import { useContext } from "react";
import DocumentsContext from "./DocumentsContext";

const useDocuments = () => {
  return useContext(DocumentsContext);
};

export default useDocuments;
