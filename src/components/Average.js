// import { React, useState } from "react";

// function Average() {
//   const [number1, setNumber1] = useState('');
//   const [number2, setNumber2] = useState('');
//   const [number3, setNumber3] = useState('');
//   const [average, setAverage] = useState(0);
//   const getAverage = () => {
//     const averageValue = ( parseFloat(number1) + parseFloat(number2) + parseFloat(number3)) / 180;
//     setAverage(averageValue);
//   };
//   const resetValues = () => {
//       setNumber1('')
//       setNumber2('')
//       setNumber3('')
//       setAverage(0)
//   }
//   return (
//     <div>
//       <form action="" className="formCtr" onSubmit={getAverage}>
//         <label htmlFor="">Number1</label>
//         <input
//           type="text"
//           placeholder="Enter a number"
//           value={number1}
//           onChange={(e) => setNumber1(e.target.value)}
//         />
//         <label htmlFor="">Number2</label>
//         <input
//           type="text"
//           placeholder="Enter a number"
//           value={number2}
//           onChange={(e) => setNumber2(e.target.value)}
//         />
//         <label htmlFor="">Number3</label>
//         <input
//           type="text"
//           placeholder="Enter a number"
//           value={number3}
//           onChange={(e) => setNumber3(e.target.value)}
//         />
//       </form>

//       <button className="average-btn" onClick={getAverage}>Average</button>
//       <button className="average-btn" onClick={resetValues}>Reset</button>
//       <h2>{parseFloat(average.toFixed(2))}</h2>
    
//     </div>
//   );
// }

// export default Average;
