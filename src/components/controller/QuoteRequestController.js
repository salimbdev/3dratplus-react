import React, {useContext, useEffect, useState} from "react";
import {Container, Row} from "react-bootstrap";
import QuoteRequestFormView from "../view/QuoteRequestFormView";
import {myContext} from "../../index";
import {formatDate} from "../util/DateUtil";

export default function QuoteRequestController(props) {
    const backUrl = "http://127.0.0.1:8081/api/user";
    const [user,] = useContext(myContext);

    useEffect(() => {
        // redirectToHome();
        fetchCategories();
    }, []);

    function redirectToHome(){
        if (user === null){
            props.setAlertMessage("Vous devez être connecté pour accéder à cette page.");
            props.setAlertVariant("danger");
            console.log(props.alertMessage);
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        }
    }
    function fetchCategories(){
        fetch(`http://127.0.0.1:8081/api/public/categories`)
            .then(response => response.json())
            .then(json => props.setCategories(json));
    }


    function postQuoteRequest(description, pieceNumber, totalArea,startingDate ,picture1, picture2, picture3, categoryId){

        picture1 === null ? picture1 = "test.jpg" : picture1 = picture1;

        console.log(startingDate);
        const formattedStartingDate = formatDate(new Date(startingDate));
        const formattedReceptionDate = formatDate(new Date());
        const newQuoteRequest = {
            description: description,
            pieceNumber: pieceNumber,
            totalArea: totalArea,
            startingDate: formattedStartingDate,
            picture1: picture1,
            picture2: picture2,
            picture3: picture3,
            receptionDate: formattedReceptionDate,
            categoryId: categoryId,
            userId: user.id
        };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${user.token}`},
            body: JSON.stringify(
                {
                    description: description,
                    pieceNumber: pieceNumber,
                    totalArea: totalArea,
                    startingDate: formattedStartingDate,
                    picture1: picture1,
                    picture2: picture2,
                    picture3: picture3,
                    receptionDate: formattedReceptionDate,
                    categoryId: categoryId,
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
            <QuoteRequestFormView
                categories={props.categories}
                postQuoteRequest={(description, pieceNumber, totalArea,startingDate ,picture1, picture2, picture3, categoryId) => postQuoteRequest(description, pieceNumber, totalArea,startingDate ,picture1, picture2, picture3, categoryId)}/>
        </div>
    )
}