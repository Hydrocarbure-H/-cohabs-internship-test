import React, {useState} from 'react';
import Message from './Message';
import InputBox from './InputBox';
import axios from 'axios';

function Window()
{
    // State to store messages
    const [messages, setMessages] = useState([]);

    /**
     * Handle sending a message
     * This function will add the message to the list and send it to the backend
     * on /api/chat/new. The response will be added to the list, even if there is an error.
     * @param userMessage
     * @returns {Promise<void>}
     */
    const handleSendMessage = async (userMessage) =>
    {
        // Add user message to the list
        const newMessages = [...messages, {text: userMessage, isUser: true}];
        setMessages(newMessages);

        // Send the message to the backend on /api/chat/new
        try
        {
            const response = await axios.post('http://localhost:3001/api/chat/new', {message: userMessage});
            setMessages([...newMessages, {text: response.data.response, isUser: false}]);
        }
        catch (error)
        {
            setMessages([...newMessages, {text: "Error : Unable to get a response", isUser: false}]);
        }
    };

    return (
        <div className="flex flex-col h-full p-4 border rounded-lg bg-white">
            <div className="flex flex-col flex-grow overflow-y-auto">
                {messages.map((msg, index) => (
                    <Message key={index} message={msg.text} isUser={msg.isUser}/>
                ))}
            </div>
            <InputBox onSend={handleSendMessage}/>
        </div>
    );
}

export default Window;
