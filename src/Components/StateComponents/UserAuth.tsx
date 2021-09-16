import { useState } from "react"
import Button from "../Button"
type AuthUser = {
    name: string;
    email: string;
}
export default function UserAuth() {
    const [user, setUser] = useState<AuthUser | null>(null) //const [user, setUser] = useState<AuthUser | null>({}As AuthUser) -typeAssertion
    const onHandleLoggedIn = () => {
        setUser({
            name: "Arun",
            email: "arun@gmail.com",
        })
    }
    const onHandleLoggedOut = () => {
        setUser(null)
    }
    return (
        <div>
            <p>User name {user?.name}</p>
            <p>User email {user?.email}</p>
            <Button handleClick={onHandleLoggedIn} label="Login" />
            <Button handleClick={onHandleLoggedOut} label="Logout" />
        </div>
    )
}
