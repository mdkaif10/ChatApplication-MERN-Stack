import React from "react";
import { useEffect } from "react";

import Dropzone from "dropzone";

export default function FileDropZone({
  acceptedFiles = "image/*, video/*",
  maxFileSize = 16 * 1024 * 1024,
  url = "/file/post",
}) {
  const dropzoneRef = React.useRef(null);
  const formRef = React.useRef(null);

  useEffect(() => {
        Dropzone.autoDiscover = false;

        if (!dropzoneRef.current && formRef.current) {
          dropzoneRef.current = new Dropzone(formRef.current, {
            url,
            acceptedFiles,
            maxFilesize: maxFileSize/(1024*1024), // Convert to MB / Dropzone expects the max file size in MB
            
          })
        }
    
        return () => {
          if (dropzoneRef.current) {
            
          

  }, []);

  return <div></div>;
}
