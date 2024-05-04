import React, {useContext} from "react";
import SingleProductView from "../view/SingleProductView";
import {myContext} from "../../index";

export default function SingleProductController(props){
    const [user,] = useContext(myContext);


    return(
        <div>
            <SingleProductView oneProduct={props.oneProduct} user={user}/>
        </div>
    )
}