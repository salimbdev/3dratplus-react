import React,{useEffect, useState} from "react";
import ServicesView from "../view/ServicesView";
import SingleServiceView from "../view/SingleServiceView";


export default function SingleServiceController(props) {
    const backUrl = "http://127.0.0.1:8081/api/public";


    // useEffect((id) => {
    //     fetchOneService(id);
    // }, []);



    // function fetchOneService(){
    //     fetch(`${backUrl}/service/${props.idService}`)
    //         .then(response => response.json())
    //         .then(json => {
    //             props.setOneService(json);
    //             console.log(json);
    //         });
    // }



    return (
        <SingleServiceView oneService={props.oneService} />
    )
}