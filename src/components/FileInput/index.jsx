import React from "react";
import { useDropzone } from "react-dropzone";

export const FileInput = ({ control, name }) => {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <>
      <Paper variant="outlined" {...getRootProps({ className: "dropzone" })}>
        <CloudUpload />
        <div>
          <input {...getInputProps()} name={name} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <em>(Only *.jpeg and *.png images will be accepted)</em>
        </div>
      </Paper>
      <List>
        <h4>Accepted files</h4>
        <List>
          <InsertDriveFile />
          {acceptedFileItems}
        </List>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </List>
    </>
  );
};
