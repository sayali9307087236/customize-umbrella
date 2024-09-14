


// import React, { useState } from 'react';
// import ColorPicker from './components/ColorPicker';
// import Dropzone from './components/Dropzone';
// import UmbrellaPreview from './components/UmbrellaPreview';
// import './App.css';

// const App = () => {
//   const [selectedColor, setSelectedColor] = useState('Blue');
//   const [logo, setLogo] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleColorChange = (color) => {
//     setIsLoading(true);
//     setSelectedColor(color);
//     setTimeout(() => setIsLoading(false), 2000);  // Increase the loader time to 2 seconds (2000 ms)
//   };

//   const handleLogoUpload = (file) => {
//     setIsLoading(true);
//     setLogo(URL.createObjectURL(file));
//     setTimeout(() => setIsLoading(false), 2000);  // Increase the loader time to 2 seconds (2000 ms)
//   };

  
//   return (
//     <div className={`app-container ${selectedColor.toLowerCase()}`}>
//       <h1>Customize Your Umbrella</h1>
//       <ColorPicker
//         colors={['Pink', 'Blue', 'Yellow']}
//         selectedColor={selectedColor}
//         onColorChange={handleColorChange}
//       />
//       <Dropzone onLogoUpload={handleLogoUpload} />
//       <UmbrellaPreview color={selectedColor} logo={logo} isLoading={isLoading} />
//     </div>
//   );
// };

// export default App;













// // import React, { useState } from 'react';
// // import ColorPicker from './components/ColorPicker';
// // import Dropzone from './components/Dropzone';
// // import UmbrellaPreview from './components/UmbrellaPreview';
// // import './App.css';

// // const App = () => {
// //   const [selectedColor, setSelectedColor] = useState('#0000ff'); // Default color in hex
// //   const [logo, setLogo] = useState(null);
// //   const [isLoading, setIsLoading] = useState(false);

// //   const handleColorChange = (color) => {
// //     setIsLoading(true);
// //     const hexColor = colorToHex(color); // Convert color name to hex
// //     setSelectedColor(hexColor);
// //     setTimeout(() => setIsLoading(false), 2000); // Increase the loader time to 2 seconds (2000 ms)
// //   };

// //   const handleLogoUpload = (file) => {
// //     setIsLoading(true);
// //     setLogo(URL.createObjectURL(file));
// //     setTimeout(() => setIsLoading(false), 2000); // Increase the loader time to 2 seconds (2000 ms)
// //   };

// //   // Convert color name to hex code
// //   const colorToHex = (color) => {
// //     const colors = {
// //       'pink': '#ff69b4',
// //       'blue': '#00f',
// //       'yellow': '#ff0'
// //     };
// //     return colors[color.toLowerCase()] || '#ffffff'; // Default to white if color is not found
// //   };

// //   // Lighten the color
// //   const lightenColor = (color, percent) => {
// //     color = color.replace(/^#/, '');
// //     let r = parseInt(color.substring(0, 2), 16);
// //     let g = parseInt(color.substring(2, 4), 16);
// //     let b = parseInt(color.substring(4, 6), 16);

// //     r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
// //     g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
// //     b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

// //     return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
// //   };

// //   const backgroundColor = lightenColor(selectedColor, 50); // Lighten the selected color for the background

// //   return (
// //     <div className="app-container" style={{ backgroundColor }}>
// //       <h1 className="app-title">Customize Your Umbrella</h1>
// //       <ColorPicker
// //         colors={['Pink', 'Blue', 'Yellow']}
// //         selectedColor={selectedColor}
// //         onColorChange={handleColorChange}
// //       />
// //       <Dropzone onLogoUpload={handleLogoUpload} />
// //       <UmbrellaPreview color={selectedColor} logo={logo} isLoading={isLoading} />
// //     </div>
// //   );
// // };

// // export default App;




import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import Dropzone from './components/Dropzone';
import UmbrellaPreview from './components/UmbrellaPreview';
import './App.css';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('blue');
  const [logo, setLogo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleColorChange = (color) => {
    setIsLoading(true);
    setSelectedColor(color.toLowerCase());
    setTimeout(() => setIsLoading(false), 1500); // Simulate loading time
  };

  const handleLogoUpload = (file) => {
    setIsLoading(true);
    setLogo(URL.createObjectURL(file));
    setTimeout(() => setIsLoading(false), 2500); // Simulate loading time
  };

  return (
    <div className={`app-container ${selectedColor}`}>
      <h1 className="app-title">Customize Your Umbrella</h1>
      <ColorPicker
        colors={['Pink', 'Blue', 'Yellow']}
        selectedColor={selectedColor}
        onColorChange={handleColorChange}
      />
      <Dropzone onLogoUpload={handleLogoUpload} />
      <UmbrellaPreview color={selectedColor} logo={logo} isLoading={isLoading} />
    </div>
  );
};

export default App;
