import { useAuth0 } from "@auth0/auth0-react"
import React from "react"


export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/profile"
            }
        })
    }
    return (
        <button className="login__button" onClick={handleLogin}>
            Log In
        </button>
    )
}