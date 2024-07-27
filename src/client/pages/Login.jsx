import { useNavigate } from "react-router-dom";
import LabeledForm from "../components/LabeledForm";

export default function Login(){
    const navigate = useNavigate();


    const handleGoogleLogin = () => {
        window.location.href = "/auth/google";
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            navigate("/member")
        } else {
            console.log("Login failed");
        }
    };


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <LabeledForm type="email" id="emailInput" name="email" label="Email" required/>
                <LabeledForm type="password" id="passwordInput" name="password" label="Password" required/>
                
                <button type="submit">Login</button>
            </form>

            <button onClick={handleGoogleLogin}>Sign in with Google</button>
        </div>
    );
}