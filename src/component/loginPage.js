// import { auth } from "../firebase/config";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useState } from "react";
// import Logo from "../img/logo.png";
// import { GoogleLogin } from "@react-oauth/google";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';


// function Login() {
//     const [userData, setUserData] = useState(null);


//     // const handleGoogleLogin = () => {
//     //     // You can keep this part if you want to handle Google login with Firebase
//     //     // const provider = new GoogleAuthProvider();
//     //     // signInWithPopup(auth, provider)
//     //     //     .then((data) => {
//     //     //         setUserData(data.user);
//     //     //         console.log(data);
//     //     //     })
//     //     //     .catch((err) => {
//     //     //         console.log(err);
//     //     //     });

//     //     // If you are using react-oauth/google, you can remove the above part and return the GoogleLoginButton component
//     //     return <GoogleLoginButton />;
//     // };
//     // const GoogleLoginButton = () => {
//     //     const clientId = 'ClientId'; // Replace with your actual Google OAuth client ID
//     //     return (
//     //         <GoogleOAuthProvider clientId={clientId}>
//     //             <GoogleLogin
//     //                 onSuccess={(res) => {
//     //                     console.log(res);
//     //                 }}
//     //                 onFailure={(err) => {
//     //                     console.log(err);
//     //                 }}
//     //             />
//     //         </GoogleOAuthProvider>
//     //     );
//     // };

//     const onGoogleButtonPress = async () => {
//         const { idToken } = await GoogleSignin.signIn();
//         const googleCredential = GoogleAuthProvider.credential(idToken);
//         return auth.signInWithCredential(googleCredential);
//     }

//     return (
//         <div style={{ textAlign: "center", margin: "auto", fontSize: "400%", color: "#518FEB", marginTop: "200px", marginBottom: "50px" }}>
//             <img style={{ width: "500px", height: "auto" }} src={Logo} alt="로고"></img>
//             <br />

//             {/* <button onClick={handleGoogleLogin}>로그인</button> */}

//             <View style={styles.rootContainer}>
//                 <GoogleSigninButton onPress{() => onGoogleButtonPress()} />   

//             </View>
//             <div>
//                 {userData
//                     ? "당신의 이름은 : " + userData.displayName : ""}
//             </div>
//         </div>
//     );
// }



// export default Login;

import { useState } from "react";
import Logo from "../img/logo.png";
import { GoogleLogin } from 'react-google-login';
import { auth } from "../firebase/config";

function Login() {
    const [userData, setUserData] = useState(null);

    const responseGoogle = (response) => {
        console.log(response);
        // Handle the response here, for example, sign in with Firebase
        // const { tokenId } = response;
        // const googleCredential = GoogleAuthProvider.credential(tokenId);
        // auth.signInWithCredential(googleCredential)
        //   .then((data) => {
        //      setUserData(data.user);
        //      console.log(data);
        //   })
        //   .catch((err) => {
        //      console.log(err);
        //   });
    }

    return (
        <div style={{ textAlign: "center", margin: "auto", fontSize: "400%", color: "#518FEB", marginTop: "200px", marginBottom: "50px" }}>
            <img style={{ width: "500px", height: "auto" }} src={Logo} alt="로고"></img>
            <br />
            <GoogleLogin
                clientId="your-client-id"
                buttonText="로그인"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <div>
                {userData
                    ? "당신의 이름은 : " + userData.displayName : ""}
            </div>
        </div>
    );
}

export default Login;
