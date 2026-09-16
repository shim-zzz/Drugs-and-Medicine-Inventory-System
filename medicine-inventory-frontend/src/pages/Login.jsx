import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "pharmacist" && password === "med123") {
            localStorage.setItem("isLoggedIn", "true");
            navigate("/medicines");
        } else {
            setError("Invalid username or password.");
        }
    };

    return (
        <div className="login-container">
            <h1>Medicine Inventory System</h1>

            <form onSubmit={handleLogin}>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="error">{error}</p>}

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
