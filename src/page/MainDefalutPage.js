// import React from "react";
// import { Link } from 'react-router-dom';
// import buttonicon from '../img/icon_btn_more.png';

// interface Component13Props {
//   head: string;
//   content1: string;
//   content2: string;
//   url: string;
//   button: string;
//   img: string;
// }

// const Component13: React.FC<Component13Props> = (props) => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//       <div style={{
//         margin: 'auto 0px auto 7%',
//         verticalAlign: "middle",
//       }}>
//         <p style={{
//           margin: '0',
//           paddingBottom: "10px",
//           fontSize: "90px",
//           lineHeight: "70px",
//           fontWeight: "500",
//           letterSpacing: "-3px"
//         }}>{props.head}<br />
//           <span style={{
//             fontSize: "50px",
//             fontWeight: "300"
//           }}>that make more sense</span></p>
//         <p style={{
//           lineHeight: "46px",
//           wordBreak: "keep-all"
//         }}></p>
//         <p style={{ fontSize: "16px" }}>{props.content1}</p>
//         <p style={{ lineHeight: "7px", fontSize: "16px" }}>{props.content2}</p>
//         <p></p>
//         <p style={{ marginTop: "50px" }}>
//           <Link style={{ fontSize: "14px", color: "#000", textDecoration: "none", }} to={{ pathname: props.url }}>
//             {props.button}
//             <img style={{
//               verticalAlign: "middle",
//               paddingLeft: "10px"
//             }} src={buttonicon} alt="" />
//           </Link>
//         </p>
//       </div>

//       <img style={{ width: "50%", display: 'block' }} src={props.img} alt="" />
//     </div>
//   );
// }

// export default Component13;