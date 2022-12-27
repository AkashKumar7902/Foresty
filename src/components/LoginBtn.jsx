import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { client } from "../client"; 

const LoginBtn = () => {
    const navigate = useNavigate();
    function login(res) {
        const data = jwt_decode(res.credential);
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        const { name, picture, sub } = data;
        const doc = {
            _id: sub,
            _type: "user",
            userName: name,
            image: picture,
        };
        client.createIfNotExists(doc).then(() => {  
            console.log("success");
            navigate("/", { replace: true });
        });
    }
    return (
        <GoogleLogin
            type="standard"
            size="large"
            text="signinwith"
            shape="rectangular"
            theme="filled_blue"
            // state_cookie_domain="/"
            useOneTap={true}
            onSuccess={credentialResponse => {
                login(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}

export default LoginBtn;
    