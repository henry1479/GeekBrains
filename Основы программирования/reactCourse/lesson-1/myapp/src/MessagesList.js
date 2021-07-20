import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';



function MessagesList () {

    //array - start value
    const [messagesList, setMessages] = useState([
    ]);
    const [message, setMessage] = useState({text:'', author: ''})
    const fillMessages = () => {
        //with callback
        // в данном случае передается начальное значение count
        setMessages(messagesList = messagesList.push(message));
    }

    // map run along array and display every element
    return (
        messages.map((message) =>  <div>{message}</div>) 

    )
}

export default MessagesList