import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute, { ProtectedRouteProps } from "../components/PrivateRoute";
import About from "../pages/about";
import CreateProduct from "../pages/createProduct";
import EmailVerification from "../pages/emailVerification";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/notfound";
import Products from "../pages/products";
import ResetPassword from "../pages/resetPassword";
import Signup from "../pages/signup";
import Stock from "../pages/stock";
import User from "../pages/user";
import VerifyEmail from "../pages/verifyEmail";

const Main: React.FC = () => {

    const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
        authenticationPath: '/login',
    };

    return (
        <>
            <Box sx={{ width: '100%', height: '100%' }}>
                <Routes>
                    <Route path='/' element={<PrivateRoute {...defaultProtectedRouteProps} outlet={<Home />}></PrivateRoute>} />
                    <Route path='/products' element={<PrivateRoute {...defaultProtectedRouteProps} outlet={<Products />}></PrivateRoute>} />
                    <Route path='/stock' element={<PrivateRoute {...defaultProtectedRouteProps} outlet={<Stock />}></PrivateRoute>} />
                    <Route path='/user' element={<PrivateRoute {...defaultProtectedRouteProps} outlet={<User />}></PrivateRoute>} />
                    <Route path="/create" element={<PrivateRoute {...defaultProtectedRouteProps} outlet={<CreateProduct />}></PrivateRoute>} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/resetpassword' element={<ResetPassword />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/please-very' element={<EmailVerification />} />
                    <Route path='/verify-email/:verificationCode' element={<VerifyEmail />} />
                    <Route path='*' element={<NotFound />} />

                </Routes>
            </Box>
        </>
    )
}

export default Main;