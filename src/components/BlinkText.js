// import React, { useState, useEffect } from 'react'

// export default function BlinkText(props) {
//     const [text, setText] = useState('अभी इंस्टॉल करें और 1 लाख जीतें'); // State to manage text

//   useEffect(() => {
//     // Interval सेट करें जो हर 2 सेकंड में टेक्स्ट को बदलेगा
//     const interval = setInterval(() => {
//       setText((prevText) => 
//         prevText === 'अभी इंस्टॉल करें और 1 लाख जीतें' ? 'अभी शेयर करें और 50K जीतें : 'अभी इंस्टॉल करें और 1 लाख जीतें'
//       );
//     }, 2000); // 2000 milliseconds = 2 seconds

//     // Cleanup function to clear the interval when the component is unmounted
//     return () => clearInterval(interval);
//   }, []); // Empty dependency array ensures the effect runs only once (on mount)


//   return (
//    <div className="App" style={{color: props.mode === 'dark'?'white':'black'}}>
//       <h1>{text}</h1> {/* Dynamic text rendering */}
//     </div>
//   )
// }








import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function BlinkText(props) {
  const [text, setText] = useState('अभी इंस्टॉल करें और 1 लाख जीतें'); // State to manage text

  useEffect(() => {
    // Interval सेट करें जो हर X सेकंड में टेक्स्ट को बदलेगा
    const interval = setInterval(() => {
      setText((prevText) => 
        prevText === 'अभी इंस्टॉल करें और 1 लाख जीतें' ? 'अभी शेयर करें और 50K जीतें' : 'अभी इंस्टॉल करें और 1 लाख जीतें'
      );
    }, props.intervalTime || 2000); // Default interval time is 2000 ms

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [props.intervalTime]); // Re-run effect if intervalTime changes

  return (
    <div className="App" style={{ color: props.mode === 'dark' ? 'yellow' : 'red' }}>
      <h1>{text}</h1> {/* Dynamic text rendering */}
    </div>
  );
}

// Define propTypes to ensure correct prop usage
BlinkText.propTypes = {
  mode: PropTypes.string.isRequired, // mode must be a string (either 'dark' or 'light')
  intervalTime: PropTypes.number // intervalTime is an optional prop, if not passed it defaults to 2000
};
