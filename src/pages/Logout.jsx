import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/api";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutUser();
            alert("Logged out successfully");
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <button
                onClick={handleLogout}
                className="warning-button"
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
