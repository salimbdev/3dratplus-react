import React, {useState} from "react";
import {Container, Row} from "react-bootstrap";
import QuoteRequestFormView from "../view/QuoteRequestFormView";

export default function QuoteRequestController() {
    const backUrl = "http://127.0.0.1:8081/api/user";

    function postQuoteRequest(description, pieceNumber, totalArea,startingDate ,picture1, picture2, picture3) {
        const newQuoteRequest = {
            description: description,
            pieceNumber: pieceNumber,
            totalArea: totalArea,
            startingDate: startingDate,
            picture1: picture1,
            picture2: picture2,
            picture3: picture3
        };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${user.token}`},
            body: JSON.stringify(
                {
                    description: description,
                    pieceNumber: pieceNumber,
                    totalArea: totalArea,
                    startingDate: startingDate,
                    picture1: picture1,
                    picture2: picture2,
                    picture3: picture3,
                    receptionDate: new Date(),
                    categoryId: 1,
                    userId: user.id
                }
            )
        };
        fetch(`${backUrl}/quote/request`, requestOptions)
            .then(response => response.json());
        console.log(newQuoteRequest);
    }
    return (
        <div>
            <QuoteRequestFormView />
        </div>
    )
}