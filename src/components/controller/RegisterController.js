import React, {useContext} from "react";
import { myContext } from "../..";
import ConnectionView from "../view/ConnectionView";
import RegisterView from "../view/RegisterView";

export default function RegisterController(props){
    const backUrl = "http://127.0.0.1:8081/api/auth";

    function fetchRegisterUser(username, password, firstName, lastName, address, postalCode, city, phoneNumber) {
        const newUser = {username: username, password: password, firstName: firstName, lastName: lastName, address: address, postalCode: postalCode, city: city, phoneNumber: phoneNumber};
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    username: username,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    address: address,
                    postalCode: postalCode,
                    city: city,
                    phoneNumber: phoneNumber
                }
                )
        };
        fetch(`${backUrl}/register`, requestOptions)
            .then(response => response.json());
        console.log(newUser);
    }

    return (
        <RegisterView fetchRegisterUser={(username, password, firstName, lastName, address, postalCode, city, phoneNumber) => fetchRegisterUser(username, password, firstName, lastName, address, postalCode, city, phoneNumber)} />
    );
}