import { useContext, useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import AuthenticationContext from "./AuthenticationContext";

export default function Authorized(props: authorizedProps) {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const { claims } = useContext(AuthenticationContext);
    useEffect(() => {
        if (props.role) {
            console.log("enter if")
            const index = claims.findIndex(claim => claim.name === "role" && claim.value === props.role);
            setIsAuthorized(index > -1);
        } else {
            console.log("Enter else")
            setIsAuthorized(claims.length > 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [claims])
    return (
        <>
            {isAuthorized ? props.authorized : props.notAuthorized}
        </>
    )
}
interface authorizedProps {
    authorized: ReactElement;
    notAuthorized?: ReactElement;
    role?: string;
}