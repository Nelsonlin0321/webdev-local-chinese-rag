"use client";
import React from "react";
import { DocViewerRenderers } from "react-doc-viewer";
import DocViewer from "react-doc-viewer";

const WordDocxViewer = ({ uri }: { uri: string }) => {
  return (
    <DocViewer
      pluginRenderers={DocViewerRenderers}
      documents={[{ uri: uri, fileType: "docx" }]}
      style={{ height: "500px" }}
    />
  );
};

export default WordDocxViewer;
