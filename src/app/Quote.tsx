"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Quote() {
    const apikey = process.env.NEXT_PUBLIC_API_KEY;
    const [quote, setQuote] = useState("Loading...");
    const [author, setAuthor] = useState("Unknown");
    const [status, setStatus] = useState("Loading...");
    const getQuote= async () =>{
        setStatus("Loading...");
        const response = await axios.get("https://api.api-ninjas.com/v1/quotes",{
            headers: { 'X-Api-Key': apikey }
        });
        const data = response.data;
        console.log(data[0]);
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setStatus("New Quote");
    }
    useEffect(()=>{
        getQuote();
    },[]);
    return (
        <div className="h-dvh lg:h-[70%] flex flex-col w-screen justify-center align-middle">
            <p className="mx-4 text-center text-primary">{quote}</p>
            <p className="text-center bg-primary text-secondary">-- {author}</p>
            <button onClick={getQuote} className="cursor-pointer text-secondary bg-primary w-40 h-10 rounded-lg self-center mt-10">{status}</button>
        </div>
    )
}