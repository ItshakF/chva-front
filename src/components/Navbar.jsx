import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="main-container">
            <nav>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/logout">Logout</Link>
            </nav>
        </div>
    );
};

export default Navbar