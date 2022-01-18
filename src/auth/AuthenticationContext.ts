import React from "react";
import { claim } from "../models/auth/auth.models";

// context to read and update claims from the user
// use in App
const AuthenticationContext = React.createContext<{
    claims: claim[];
    update(calims: claim[]): void
}>({ claims: [], update: () => { } });

export default AuthenticationContext;