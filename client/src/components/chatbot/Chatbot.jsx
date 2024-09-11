import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import './chatbotstyle.css';
import Navbar from '../navbar/Navbar';

export default function Chatbot() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hi there, how are you?', type: 'incoming' },
  ]);
  const [isTyping, setIsTyping] = useState(false);  

  const sendMessage = async () => {
    if (message.trim()) {
      
      setMessages([...messages, { text: message, type: 'outgoing' }]);
  
     
      setMessage('');
  
      try {
        
        setIsTyping(true);
  
       
        const response = await fetch('https://supreme-margi-rauhan-911ebc59.koyeb.app/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: message,  
          }),
        });
  
        if (!response.ok) {
          const error = await response.json();
          console.error('API error:', error);
          setIsTyping(false);
          return;
        }
  
        
        const data = await response.json();
  
       
        setIsTyping(false);
        if (data?.response) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: data.response, type: 'incoming' },
          ]);
        }
      } catch (error) {
        console.error('Error fetching response from API:', error);
        setIsTyping(false);
      }
    }
  };


  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbotmain">
     <Navbar/>   
      <div className="chatbot">
        <header>
          <h2>Chatbot</h2>
        </header>

        <ul className="chatbox">
         
          {messages.map((msg, index) => (
            <li key={index} className={`chat ${msg.type}`}>
              {msg.type === 'incoming' && (
                <span>
                  <i className="ri-robot-3-fill"></i>
                </span>
              )}
              <p>{msg.text}</p>
            </li>
          ))}

         
          {isTyping && (
            <li className="chat incoming">
              <span>
                <i className="ri-robot-3-fill"></i>
              </span>
              <p>Typing...</p>
            </li>
          )}
        </ul>

        <div className="chat-input">
          <textarea
            placeholder="Enter a message..."
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            required
          ></textarea>
          <span id="send-btn" onClick={sendMessage}>
            <i className="ri-send-plane-2-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
}


