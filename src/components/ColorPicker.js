// // import React from 'react';
// // import { Button } from 'react-bootstrap';
// // import '../styles/ColorPicker.css';  // Update path

// // const ColorPicker = ({ colors, selectedColor, onColorChange }) => {
// //   return (
// //     <div className="color-options">
// //       {colors.map((color) => (
// //         <Button
// //           key={color}
// //           variant={color.toLowerCase()}
// //           onClick={() => onColorChange(color)}
// //           className={`color-btn ${selectedColor === color ? 'active' : ''}`}
// //         >
// //           {color}
// //         </Button>
// //       ))}
// //     </div>
// //   );
// // };

// // export default ColorPicker;




// import React from 'react';
// import { Button } from 'react-bootstrap';
// import '../styles/ColorPicker.css';

// const ColorPicker = ({ colors, selectedColor, onColorChange }) => {
//   return (
//     <div className="color-options">
//       {colors.map((color) => (
//         <Button
//           key={color}
//           variant={color.toLowerCase()}
//           onClick={() => onColorChange(color)}
//           className={`color-btn ${selectedColor === color ? 'active' : ''}`}
//           style={{ backgroundColor: color.toLowerCase() }}  // Set background color dynamically
//         >
//           {/* No text inside the buttons */}
//         </Button>
//       ))}
//     </div>
//   );
// };

// export default ColorPicker;






import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/ColorPicker.css';

const ColorPicker = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div className="color-options">
      {colors.map((color) => (
        <Button
          key={color}
          variant="light"
          onClick={() => onColorChange(color)}
          className={`color-btn ${selectedColor.toLowerCase() === color.toLowerCase() ? 'active' : ''}`}
          style={{ backgroundColor: color.toLowerCase() }}  // Set background color dynamically
        />
      ))}
    </div>
  );
};

export default ColorPicker;
