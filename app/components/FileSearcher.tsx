"use client";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import useDocuments from "../hooks/useDocuments";

interface Props {
  setFileName: (fileName: string) => void;
}

const FileSearcher = ({ setFileName }: Props) => {
  const { data: documentsResponse } = useDocuments();

  const listOfDocument = documentsResponse?.results
    ? documentsResponse.results
    : [];

  const allDocument = listOfDocument.map((doc) => doc.file_name);

  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string | undefined>("");

  return (
    <Autocomplete
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event: any, newInputValue) => {
        setInputValue(newInputValue);
        setFileName(newInputValue);
      }}
      className="rounded-lg border w-full"
      disablePortal
      id="combo-box-demo"
      options={allDocument}
      renderInput={(params) => (
        <TextField
          size="small"
          InputLabelProps={params.InputLabelProps}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
                搜索文档
              </InputAdornment>
            ),
          }}
          id={params.id}
          inputProps={params.inputProps}
          fullWidth={params.fullWidth}
        />
      )}
    />
  );
};

export default FileSearcher;
