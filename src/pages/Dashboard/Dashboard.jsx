import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/api";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchUsers();
                setUsers(res.data);
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    setIsAuthenticated(false);
                }
            }
        };

        fetchData();
    }, []);

    if (!isAuthenticated) {
        return (
            <div className="not-authenticated">
                <h2>You need to connect to see this page</h2>
                <Link to="/login" className="login-link">Go to Login</Link>
            </div>
        );
    }

    return (
        <div className="user-list-container">
            <h2>User List</h2>
            <ul className="black-color">
                {users.map((user) => (
                    <li key={user.id}>{user.firstname} {user.lastname}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
