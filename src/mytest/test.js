import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "../index";







function Test() {
    const [PVE, setPVE] = useState([])
    console.log(PVE)
    useEffect(()=>{
        getStudents()
    },[])

    const getStudents = (data)=>{
        axios.get(API_URL).then(data => setPVE(data.data))
    }

    const resetState = () => {
        getStudents();
    };

    return (
        <div>
            <h1>{PVE[0].title}</h1>
        </div>
    )
}

export default Test;
