// // import { auth } from "../firebase/config";
// // import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// // import { useState } from "react";
// // import Logo from "../img/logo.png";
// // import { GoogleLogin } from "@react-oauth/google";
// // import { GoogleOAuthProvider } from "@react-oauth/google";
// // import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';


// // function Login() {
// //     const [userData, setUserData] = useState(null);


// //     // const handleGoogleLogin = () => {
// //     //     // You can keep this part if you want to handle Google login with Firebase
// //     //     // const provider = new GoogleAuthProvider();
// //     //     // signInWithPopup(auth, provider)
// //     //     //     .then((data) => {
// //     //     //         setUserData(data.user);
// //     //     //         console.log(data);
// //     //     //     })
// //     //     //     .catch((err) => {
// //     //     //         console.log(err);
// //     //     //     });

// //     //     // If you are using react-oauth/google, you can remove the above part and return the GoogleLoginButton component
// //     //     return <GoogleLoginButton />;
// //     // };
// //     // const GoogleLoginButton = () => {
// //     //     const clientId = 'ClientId'; // Replace with your actual Google OAuth client ID
// //     //     return (
// //     //         <GoogleOAuthProvider clientId={clientId}>
// //     //             <GoogleLogin
// //     //                 onSuccess={(res) => {
// //     //                     console.log(res);
// //     //                 }}
// //     //                 onFailure={(err) => {
// //     //                     console.log(err);
// //     //                 }}
// //     //             />
// //     //         </GoogleOAuthProvider>
// //     //     );
// //     // };

// //     const onGoogleButtonPress = async () => {
// //         const { idToken } = await GoogleSignin.signIn();
// //         const googleCredential = GoogleAuthProvider.credential(idToken);
// //         return auth.signInWithCredential(googleCredential);
// //     }

// //     return (
// //         <div style={{ textAlign: "center", margin: "auto", fontSize: "400%", color: "#518FEB", marginTop: "200px", marginBottom: "50px" }}>
// //             <img style={{ width: "500px", height: "auto" }} src={Logo} alt="로고"></img>
// //             <br />

// //             {/* <button onClick={handleGoogleLogin}>로그인</button> */}

// //             <View style={styles.rootContainer}>
// //                 <GoogleSigninButton onPress{() => onGoogleButtonPress()} />   

// //             </View>
// //             <div>
// //                 {userData
// //                     ? "당신의 이름은 : " + userData.displayName : ""}
// //             </div>
// //         </div>
// //     );
// // }



// // export default Login;

// import { useState } from "react";
// import Logo from "../img/logo.png";
// import { GoogleLogin } from 'react-google-login';
// import { auth } from "../firebase/config";


// function Login() {
//     const [userData, setUserData] = useState(null);

//     const responseGoogle = (response) => {
//         console.log(response);
//         // Handle the response here, for example, sign in with Firebase
//         // const { tokenId } = response;
//         // const googleCredential = GoogleAuthProvider.credential(tokenId);
//         // auth.signInWithCredential(googleCredential)
//         //   .then((data) => {
//         //      setUserData(data.user);
//         //      console.log(data);
//         //   })
//         //   .catch((err) => {
//         //      console.log(err);
//         //   });
//     }

//     return (
//         <div style={{ textAlign: "center", margin: "auto", fontSize: "400%", color: "#518FEB", marginTop: "200px", marginBottom: "50px" }}>
//             <img style={{ width: "500px", height: "auto" }} src={Logo} alt="로고"></img>
//             <br />
//             <GoogleLogin
//                 clientId="your-client-id"
//                 buttonText="로그인"
//                 onSuccess={responseGoogle}
//                 onFailure={responseGoogle}
//                 cookiePolicy={'single_host_origin'}
//             />
//             <div>
//                 {userData
//                     ? "당신의 이름은 : " + userData.displayName : ""}
//             </div>
//         </div>
//     );
// }

// export default Login;
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom'
import './title.css';
import { auth } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import google from "../img/googlelogin.png";
import logo from '../img/mainlogo.png';
import axios from 'axios';

const Login = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider 구글 설정
        signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
            .then((data) => {
                setUserData(data.user); // user data 설정
                console.log(data); // console에 UserCredentialImpl 출력
                navigate('/afterLogin');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // function handleGoogleLogin() {
    //     axios.post('http://localhost:8000/login')
    //         .then(response => {
    //             console.log(response);
    //             navigate('/afterLogin');
    //         });
    // }


    return (
        <div>
            {/* 폰트 */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Paytone+One&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap" rel="stylesheet" />

            <div className="title-container">
                <CSSTransition
                    in={true} // 애니메이션을 항상 보여주도록 설정
                    timeout={1000} // 애니메이션 지속 시간(ms)
                    classNames="fade" // 나타나는 애니메이션
                >
                    <img src={logo} className="mainlogo" />
                </CSSTransition>

                <button onClick={handleGoogleLogin} style={{
                    background: '#FBF0C9', border: 'hidden', position: "relative", top: "185px", cursor: "pointer", width: '480px', height: '75px', borderRadius: '50px'
                }}><img style={{ background: "white", width: '480px', height: '75px', borderRadius: '30px' }} src={google}></img></button>


            </div>
        </div >
    );
};

export default Login;