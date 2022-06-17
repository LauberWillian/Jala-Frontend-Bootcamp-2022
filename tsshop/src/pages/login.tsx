import { Button } from "@mui/material";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import IUser from "../interfaces/IUser";
import { UserToken } from '../auth/userToken';
import userService from "../services/userService";

const Login = () => {
    const [, setToken] = UserToken();
    const [user, setUser] = useState({ email: '', password: '' } as IUser)
    const navigate = useNavigate();

    const handleLogin = async () => {
        const response: any = await userService.login(user);
        setToken(response.token);
        navigate('/')
    }

    return (
        <div style={{ marginLeft: 40, marginTop: 10, width: '30%' }}>
            <h1>Login</h1>
            <input
                value={user.email}
                placeholder="your@email.com"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <br />
            <input
                value={user.password}
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <hr />
            <Button
                color='info'
                variant='contained'
                size="large"
                disabled={!user.email && !user.password} onClick={(() => { handleLogin() })}
            >
                LOGIN
            </Button>
            <hr />
            <Button
                sx={{ bgcolor: 'green', marginTop: 3 }}
                variant='contained'
                size="large"
                onClick={() => navigate('/resetpassword')}
            >
                FORGOT MY PASSWORD?
            </Button>
            <Button
                sx={{ bgcolor: 'green', marginTop: 3 }}
                variant='contained'
                size="large"
                onClick={() => navigate('/signup')}
            >
                DON'T HAVE AN ACCOUNT? SIGN UP
            </Button>

        </div >
    )

}


export default Login;