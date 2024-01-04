import React from "react";
import TopicBox from "../components/TopicBox";
import Content from "../components/content";
import {Link, useNavigate, userNavigate} from 'react-router-dom';

export default function Home()
{
    const Navigate = useNavigate();
    return(
        <div>
            <h1>Home page</h1>
            <Link to = "/about">About Us</Link><br></br>
            <Link to = "/cont">Contact Us</Link>
            <TopicBox/>
            <Content/>

            {/* can do with a button as well*/}
            {/* <button onClick={()=> Navigate("/about")}>About us</button> */}

        </div>
    )
}
