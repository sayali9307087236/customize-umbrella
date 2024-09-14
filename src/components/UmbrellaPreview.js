// import React from 'react';
// import '../styles/UmbrellaPreview.css';  // Ensure path to CSS is correct

// const UmbrellaPreview = ({ color, logo, isLoading }) => {
//   return (
//     <div className="umbrella-preview">
//       {isLoading ? (
//         <div className="loader-container">
//           <img src="/loader_icon.svg" alt="Loading..." className="loader" />
//         </div>
//       ) : (
//         <>
//           <img
//             src={`/umbrella-${color.toLowerCase()}.png`}  // Dynamically loads the correct umbrella image
//             alt={`${color} Umbrella`}  // Accessible alt text
//             className="umbrella-image"
//           />
//           {logo && <img src={logo} alt="Logo" className="logo-image" />}
//         </>
//       )}
//     </div>
//   );
// };

// export default UmbrellaPreview;




// import React from 'react';
// import '../styles/UmbrellaPreview.css';

// const UmbrellaPreview = ({ color, logo, isLoading }) => {
//   return (
//     <div className="umbrella-preview">
//       {isLoading ? (
//         <div className="loader-container">
//           <img src="/loader_icon.svg" alt="Loading..." className="loader" />
//         </div>
//       ) : (
//         <>
//           <img
//             src={`/umbrella-${color}.png`}  // Dynamically loads the correct umbrella image
//             alt={`${color} Umbrella`}
//             className="umbrella-image"
//           />
//           {logo && <img src={logo} alt="Logo" className="logo-image" />}
//         </>
//       )}
//     </div>
//   );
// };

// export default UmbrellaPreview;










import React from 'react';
import '../styles/UmbrellaPreview.css';

const UmbrellaPreview = ({ color, logo, isLoading }) => {
  return (
    <div className="umbrella-preview">
      {isLoading ? (
        <div className="loader-container">
          <img src="/loader_icon.svg" alt="Loading..." className="loader" />
        </div>
      ) : (
        <>
          <img
            src={`/umbrella-${color}.png`}  // Dynamically loads the correct umbrella image
            alt={`${color} Umbrella`}
            className="umbrella-image"
          />
          {logo && <img src={logo} alt="Logo" className="logo-image" />}
        </>
      )}
    </div>
  );
};

export default UmbrellaPreview;
