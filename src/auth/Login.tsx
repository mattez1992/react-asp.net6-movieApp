import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import AuthForm from '../forms/auth/AuthForm';
import { authResponse, userCredentials } from '../models/auth/auth.models';
import DisplayErrors from '../utils/DisplayErrors';
import { urlAccounts } from '../utils/endpoints';
import AuthenticationContext from './AuthenticationContext';
import { getClaims, saveToken } from './handle.JWT';

export default function Login() {
    const [errors, setErrors] = useState<string[]>([]);
    const { update } = useContext(AuthenticationContext);
    const history = useHistory();
    async function login(credentials: userCredentials) {
        try {
            setErrors([]);
            const response = await axios.post<authResponse>(`${urlAccounts}/login`, credentials);
            console.log(response.data);
            saveToken(response.data);
            update(getClaims());
            history.push("/");
        } catch (error) {
            setErrors(error.response.data)
        }
    }
    return (
        <>
            <h3>Login</h3>
            <DisplayErrors errors={errors} />
            <AuthForm model={{ email: "", password: "" }} onSubmit={async values => { await login(values) }} />
        </>
    )
}
