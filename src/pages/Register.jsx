import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";


const Register = () => {
    const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            alert("User registered successfully");
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="black-color" >Register</h1>
            <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} />
            <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;