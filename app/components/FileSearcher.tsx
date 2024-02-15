"use client";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useDocuments from "../documents/useDocuments";

interface Props {
  setFileName: (fileName: string) => void;
}

const FileSearcher = ({ setFileName }: Props) => {
  const { documents, documentsDispatch } = useDocuments();

  return (
    <Autocomplete
      inputValue={documents ? documents[0].file_name : undefined}
      onInputChange={(event: any, newInputValue) => {
        setFileName(newInputValue);
      }}
      className="rounded-lg border w-full"
      disablePortal
      id="combo-box-demo"
      options={documents.map((doc) => doc.file_name)}
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
