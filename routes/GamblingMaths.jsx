import React, {useEffect} from "react";
import { useNavigate } from "react-router";

export default function GamblingMaths() {
    
    const navigate = useNavigate();
     useEffect(() => {
        navigate("/");
     }, [navigate]);
     
    return null
}