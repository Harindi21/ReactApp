import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact()
{
    const nav = useNavigate();
    return(
        <div>
            <h1>contact us page</h1>
            <button onClick = {() => nav(-1)}>Home</button>
        </div>
    )
}