import React, {useContext} from "react";
import { myContext } from "../..";
import ConnectionView from "../view/ConnectionView";

export default function ConnectionController(props){
    const backUrl = "http://127.0.0.1:8081/api/auth";
    const [user, setUser] = useContext(myContext);

    function fetchUser(login, password) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: login, password: password })
        };
        fetch(`${backUrl}/login`, requestOptions)
            .then(response => response.json())
            .then(json => setUser(
                {
                    token: json.accessToken,
                    id: json.id,
                    firstName: json.firstName,
                    lastName: json.lastName,
                    bearer: json.tokenType,
                    roles: json.roles
                }
            ));
        console.log(user);
    }

    return (
        <ConnectionView fetchUser={(login, password) => fetchUser(login, password)} />
    );
}