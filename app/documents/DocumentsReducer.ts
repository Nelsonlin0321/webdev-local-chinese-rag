export interface Document {
  file_name: string;
  file_path: string;
}

interface AddDocument {
  type: "ADD";
  document: Document;
}

interface SetDocument {
  type: "SET";
  documents: Document[];
}

export type DocumentAction = AddDocument | SetDocument;

const DocumentsReducer = (
  documents: Document[],
  action: DocumentAction
): Document[] => {
  switch (action.type) {
    case "ADD":
      return [action.document, ...documents];
    case "SET":
      return action.documents;
  }
};

export default DocumentsReducer;
