import { useMsal } from "@azure/msal-react"

const LogoutButton = () => {
    
    const {instance} = useMsal();

    const handleLogout = () => {
        instance.logoutRedirect({
            postLogoutRedirectUri: '/',
        });
        window.location.reload();
    };

    return (
        <button className="nav-btn" onClick={handleLogout} >
            Logout
        </button>
    );
};

export default LogoutButton;