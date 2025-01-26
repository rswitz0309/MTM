import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  const handleBackClick = () => {
    navigate('/company');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Truckers' Chat</h1>
        <button
          onClick={handleBackClick}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Return to Dashboard
        </button>
      </div>

      <div className="flex-1 overflow-y-scroll p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 mb-2 rounded-md ${
              msg.sender === "You" ? "bg-blue-100 text-right" : "bg-gray-200"
            }`}
          >
            <strong>{msg.sender}: </strong>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="bg-gray-200 p-4 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-md border border-gray-400"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat; 