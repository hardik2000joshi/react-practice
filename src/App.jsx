import { useState } from 'react';
import './App.css'
import { createRoot } from 'react-dom/client';


export default function Blue() {
 const [messages, setMessages] = useState("");
 const [message1, setMessage1] = useState("");
 const text = (e) => {
  e.preventDefault()
  alert("Message Shown: " +messages);
 };
 return (
  <div>
  <form onSubmit={text}>
    <label> Enter your message: </label>
<input type="text" placeholder="Any Valid Message" value={messages} onChange={(e)=>setMessages(e.target.value)} />
<br />
<br />
<label>
  Description
  </label>
<input 
type="text" 
placeholder="Enter the description message"
value={message1}
onChange={(p) => setMessage1(p.target.value)}
/>
<br />
<br />
<button type="submit"> Click to submit</button>                                       
  </form>
  <div>
  <h1>
      Hi, Components are the reusable building blocks of an react application
    </h1>
  </div>
  </div>
 )
}

export function CompaniesPage() {
  const setCompany = "123";
  return (
    <div>
      Companies information given on page no {setCompany}
    </div>
  )
}

export function IndustriesPage() {
  return (
    <div>
      Industries
    </div>
  )
}
