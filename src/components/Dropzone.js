// // import React from 'react';
// // import { useDropzone } from 'react-dropzone';
// // import '../styles/Dropzone.css';  // Update path

// // const Dropzone = ({ onLogoUpload }) => {
// //   const { getRootProps, getInputProps } = useDropzone({
// //     accept: 'image/*',
// //     onDrop: (acceptedFiles) => {
// //       onLogoUpload(acceptedFiles[0]);
// //     },
// //   });

// //   return (
// //     <div {...getRootProps({ className: 'dropzone' })}>
// //       <input {...getInputProps()} />
// //       <p>Drag 'n' drop a logo here, or click to select one</p>
// //     </div>
// //   );
// // };

// // export default Dropzone;



// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { FaUpload } from 'react-icons/fa';  // You can use react-icons or an image for the upload icon
// import '../styles/Dropzone.css';  // Ensure path to CSS is correct

// const Dropzone = ({ onLogoUpload }) => {
//   const [fileName, setFileName] = useState('');  // State to store the uploaded file name
//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop: (acceptedFiles) => {
//       const file = acceptedFiles[0];
//       if (file) {
//         setFileName(file.name);  // Set the uploaded file name
//         onLogoUpload(file);      // Pass the file to the parent component
//       }
//     },
//   });

//   return (
//     <div {...getRootProps({ className: 'dropzone-container' })}>
//       <input {...getInputProps()} />

//       {/* Tile with upload icon or image */}
//       <div className="upload-tile">
//         <FaUpload className="upload-icon" />  {/* You can replace this with an image if you want */}
//         <p>{fileName ? fileName : "Upload your logo"}</p>  {/* Show file name after upload */}
//       </div>
//     </div>
//   );
// };

// export default Dropzone;



import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaUpload } from 'react-icons/fa';  // You can use react-icons or an image for the upload icon
import '../styles/Dropzone.css';

const Dropzone = ({ onLogoUpload }) => {
  const [fileName, setFileName] = useState('');
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFileName(file.name);
        onLogoUpload(file);
      }
    },
  });

  return (
    <div {...getRootProps({ className: 'dropzone-container' })}>
      <input {...getInputProps()} />
      <div className="upload-tile">
        <FaUpload className="upload-icon" />
        <p>{fileName || "Upload your logo"}</p>
      </div>
    </div>
  );
};

export default Dropzone;
