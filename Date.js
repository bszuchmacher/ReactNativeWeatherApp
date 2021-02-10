// import React, {useState, useEffect} from 'react';
// import {View, Text} from 'react-native';

// const App = () => {
//   const [currentDate, setCurrentDate] = useState('');

//   useEffect(() => {
//     var date = new Date().getDate(); //Current Date
//     var month = new Date().getMonth() + 1; //Current Month
//     var year = new Date().getFullYear(); //Current Year
//     var hours = new Date().getHours(); //Current Hours
//     var min = new Date().getMinutes(); //Current Minutes
    
//     setCurrentDate(
//       month + '/' + date + '/' + year 
//       + ' ' + hours + ':' + min
//     );
//   }, []);

//   return (
//       <View>
//         <View>
//           <Text>
//             {currentDate}
//           </Text>
//         </View>
//       </View>
//   );
// };


// export default App;