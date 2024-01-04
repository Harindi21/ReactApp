import React from "react";
import { useNavigate } from "react-router-dom";

export default function About()
{

    const Navigate = useNavigate();

    return(
        
        <div>
            <h1>About page</h1>
            <button onClick = {() => Navigate(-1)}>
                Home
            </button>
        </div>
    )
}