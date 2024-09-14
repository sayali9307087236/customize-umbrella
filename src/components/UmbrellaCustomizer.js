// import React, { useState } from 'react';
// import UmbrellaPreview from './UmbrellaPreview';  // Import the preview component
// import ColorPicker from './ColorPicker';  // Assuming you have a color picker component

// const UmbrellaCustomizer = () => {
//   const [color, setColor] = useState('pink');  // Default umbrella color
//   const [logo, setLogo] = useState(null);  // Logo will be uploaded

//   const handleColorChange = (selectedColor) => {
//     setColor(selectedColor);
//   };

//   const handleLogoUpload = (logoFile) => {
//     const logoURL = URL.createObjectURL(logoFile);  // Convert file to a temporary URL for preview
//     setLogo(logoURL);
//   };

//   return (
//     <div className="umbrella-customizer">
//       <ColorPicker colors={['Pink', 'Blue', 'Yellow']} selectedColor={color} onColorChange={handleColorChange} />
//       <UmbrellaPreview color={color} logo={logo} />
//       <input type="file" onChange={(e) => handleLogoUpload(e.target.files[0])} />
//     </div>
//   );
// };

// export default UmbrellaCustomizer;








import React, { useState } from 'react';
import UmbrellaPreview from './UmbrellaPreview';  // Import the preview component
import ColorPicker from './ColorPicker';  // Import the color picker component
import Dropzone from './Dropzone'; // Import the upload component

const UmbrellaCustomizer = () => {
  const [color, setColor] = useState('pink');  // Default umbrella color
  const [logo, setLogo] = useState(null);  // Logo will be uploaded

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor.toLowerCase());
  };

  const handleLogoUpload = (logoFile) => {
    const logoURL = URL.createObjectURL(logoFile);
    setLogo(logoURL);
  };

  return (
    <div className="umbrella-customizer">
      <ColorPicker colors={['Pink', 'Blue', 'Yellow']} selectedColor={color} onColorChange={handleColorChange} />
      <div className="upload-and-preview">
        <Dropzone onLogoUpload={handleLogoUpload} />
        <UmbrellaPreview color={color} logo={logo} />
      </div>
    </div>
  );
};

export default UmbrellaCustomizer;
