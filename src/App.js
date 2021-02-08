import {useState} from 'react';
import './App.css';
import TextInput from './TextInput';
import message from'./Message'
import NamePicker from './NamePicker';


function App() {
  const [messages,setMessages] = useState([])
  const [username,setUsername] = useState('')

  console.log(messages)
  return <div className={"App"}>
 
    <header className="header">
      <div className="logo" />
      CHATTER
      <NamePicker saveName={setUsername} />
    </header>

    
    
    <main className="messages">
        <div className="message">

          {messages.map((message) =>            
              
            <div className="message-row">
              <h2>{message.text}</h2>
              <p className="date">{message.ts}</p>
              <h3 className="message-user">{"from: " + message.name}</h3>
            </div>
            
            
            )}
        </div>
    </main>
    <TextInput 
      send={(t)=> setMessages([{text:t, name:username, ts:new Date()}, ...messages])}
    />
  </div>
}

export default App;