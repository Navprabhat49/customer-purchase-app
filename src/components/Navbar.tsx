import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import LogoutButton from "./LogoutButton";
import { useUserRoles } from "../auth/hooks/useUserRoles";

const Navbar = () => {
    const navigate = useNavigate();

    const {isReadWrite} = useUserRoles();

    console.log('Navbar isReadWrite '+isReadWrite);

    return (
    <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate("/")}>
            Purchase Tracker
        </div>
        <div className="nav-center">
           { isReadWrite && <NavLink className="nav-btn" to="/">Dashboard</NavLink> }
            <NavLink className="nav-btn" to="/reports">Reports</NavLink>
        </div>
        <div className="nav-right">
            <LogoutButton />
        </div>
    </nav>
    );
};

export default Navbar;