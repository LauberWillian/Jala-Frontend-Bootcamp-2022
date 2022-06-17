import { Button } from "@mui/material";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import IUser from "../interfaces/IUser";
import { UserToken } from '../auth/userToken';
import userService from "../services/userService";

const NewPassword = () => {
    const [user, setUser] = useState({  password: '' } as IUser)
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
                value={user.password}
                placeholder="your password"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <br />
            <Button
                color='info'
                variant='contained'
                size="large"
                disabled={!user.password} onClick={(() => { handleReset() })}
            >
                Reset
            </Button>
            <hr />
       

        </div >
    );

}


export default NewPassword;