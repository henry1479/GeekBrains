
import '../App.css';
import MessageList from './MessageList';
import Form from './Form';
import { useState, useEffect } from 'react';




function App() {

  // init state and function-setter
  const[messages, setMessages] = useState([]);


  //function handler on click button 'send' in the Form
  //it get argument - event
  const sendMessage = (event) => {
    //an empty object for data of a message
    let value = {};
    // array is the last value of the state
    let array = messages;
    //get values of inputs in the Form
    // and write them in object
    value.author = event.target.previousSibling.previousSibling.previousSibling.value;
    value.text = event.target.previousSibling.value;
    // adding object in the array
    array.push(value)
    // set the state
    setMessages([...array]);
    // clean out inputs
    event.target.previousSibling.previousSibling.previousSibling.value= '';
    event.target.previousSibling.value= '';
    
  }

  //send message accepting getting message 
  useEffect(()=>{
    //get a last object in the state
    let obj = messages[messages.length-1];
    let array = messages;
    //my login
    const myLog = /K|k|ostya/;
    // if the object do not exist to create new object 
    obj = (obj === undefined || obj === null)? {author: ' ', message: ''} : obj;
    //if I send the meesage I will get message about ok!
    if(myLog.test(obj.author)) {
      const responseMessage = {author: 'robot', text: `Dear ${obj.author}, your message had sent!`}
      array.push(responseMessage)
      const messageIntervalId = setTimeout(()=>{setMessages([...array])},3000);
    
    }
  }, [messages])

 

  return (
    <div className="App">
      <header className="App-header">
          <MessageList data = {messages} />
          <Form  handleChange ={sendMessage} />
      </header>
    </div>
  );
}

export default App;
