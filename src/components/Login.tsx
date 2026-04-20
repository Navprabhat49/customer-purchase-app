import { useMsal } from "@azure/msal-react"
import { loginRequest } from "../auth/authConfig";

const Login = () => {

    const {instance} = useMsal();

    const handleLogin = () => {
        instance.loginRedirect({
            ...loginRequest,
            redirectUri: '/',
        })
        .catch((error) => console.log(error));
    };

    return (
        <div className="login-container">
            <h2>Customer Purchase App</h2>
            <button className="btn" onClick={handleLogin}>
                Login with Azure
            </button>
        </div>
    )
};

export default Login;