import React,{useEffect} from "react";
import ServicesView from "../view/ServicesView";


export default function ServicesController(props) {
    const backUrl = "http://127.0.0.1:8081/api/public";


    useEffect(() => {
        fetchServices();
    }, []);
    function fetchServices(){
        fetch(`${backUrl}/services`)
            .then(response => response.json())
            .then(json => {
                props.setServices(json)
            });

    }

    function fetchOneService(id){
        fetch(`${backUrl}/service/${id}`)
            .then(response => response.json())
            .then(json => {
                props.setOneService(json);
                console.log(json);
            });
    }

    return (
        <ServicesView services={props.services} fetchOneService={(id) => fetchOneService(id)}/>
    )
}