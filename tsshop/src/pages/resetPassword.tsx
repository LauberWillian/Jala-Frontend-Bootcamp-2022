import { Button } from "@mui/material";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import IUser from "../interfaces/IUser";
import { UserToken } from '../auth/userToken';
import userService from "../services/userService";

const ResetPassword = () => {
    const [user, setUser] = useState({ email: '', password: '', birthdate: '' } as IUser)
    const navigate = useNavigate();

    const handleReset = async () => {
        const response: any = await userService.resetPassword(user);
        console.log(response.data);
        // navigate('/')
    }

    return (
        <div style={{ marginLeft: 40, marginTop: 10, width: '30%' }}>
            <h1>Reset password</h1>
            <input
                value={user.email}
                placeholder="your@email.com"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <br />
            <input
                value={user.name}
                placeholder="your name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <br />
            <input
                type="date"
                value={user.birthdate}
                placeholder="your birthdate"
                onChange={(e) => setUser({ ...user, birthdate: e.target.value })}
            />
            <br />
            <Button
                color='info'
                variant='contained'
                size="large"
                disabled={!user.email} onClick={(() => { handleReset() })}
            >
                Reset
            </Button>
            <hr />
       

        </div >
    );

}


export default ResetPassword;