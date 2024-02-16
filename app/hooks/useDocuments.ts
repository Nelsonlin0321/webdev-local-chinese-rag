import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Document from "../entities/Document";

const apiClient = new APIClient<Document>("/RAG/documents");

const useDocuments = () =>
  useQuery({
    queryKey: ["documents"],
    queryFn: apiClient.getAll,
  });

export default useDocuments;
