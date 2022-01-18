import { authResponse, claim } from "../models/auth/auth.models";
const tokenKey = "token";
const expirationKey = "token-expiration";

export function saveToken(authData: authResponse) {
    localStorage.setItem(tokenKey, authData.token);
    localStorage.setItem(expirationKey, authData.expiration.toString());
}

export function getClaims(): claim[] {
    const token = localStorage.getItem(tokenKey);

    if (!token) {
        return [];
    }

    const expiration = localStorage.getItem(expirationKey);
    if (expiration != null) {
        const expirationDate = new Date(expiration);

        // check if expired
        if (expirationDate <= new Date()) {
            logOut();
            return [];
        }
        const dataToken = JSON.parse(atob(token.split(".")[1]));
        const response: claim[] = [];
        for (const prop in dataToken) {
            response.push({ name: prop, value: dataToken[prop] });
        }
        return response;

    }
    return [];

}

export function logOut() {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(expirationKey);
}

export function getToken() {
    return localStorage.getItem(tokenKey);
}