import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import AuthenticationContext from "../auth/AuthenticationContext";
import "./Ratings.css";

export default function Ratings(props: ratingsProps) {
    const [maxValues, setmaxValues] = useState<number[]>([]);
    const [selectedValue, setSelectedValue] = useState<number>(0)
    const { claims } = useContext(AuthenticationContext);
    useEffect(() => {
        setmaxValues(Array(props.maxValue).fill(0));
        setSelectedValue(props.selectedValue);
    }, [props.maxValue, props.selectedValue])

    function handleMouseOver(rate: number) {
        setSelectedValue(rate);
    }

    function handleOnClick(rate: number) {
        const isLoggedIn = claims.length > 0;
        if (!isLoggedIn) {
            Swal.fire({ title: "error", text: "You need to login", icon: "error" });
            return;
        }

        setSelectedValue(rate);
        props.onChange(rate);
    }
    function handleMouseOut() {
        setSelectedValue(props.selectedValue);
    }
    return (
        <>
            {maxValues.map((_, index) =>
                <FontAwesomeIcon
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseOut={() => handleMouseOut()}
                    onClick={() => handleOnClick(index + 1)}
                    icon="star" key={index}
                    className=
                    {
                        `fa-lg pointer ms-1
                 ${selectedValue >= index + 1 ? "checked" : null
                        }`
                    } />)}
        </>
    )
}
interface ratingsProps {
    maxValue: number;
    selectedValue: number;
    onChange(rate: number): void;
}